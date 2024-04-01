package com.example.demo.service;


import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.dto.Role;
import com.example.demo.dto.UserJoinRequestDto;
import com.example.demo.entity.User;
import com.example.demo.exception.AppException;
import com.example.demo.exception.ErrorCode;
import com.example.demo.repository.UserRepository;
import com.example.demo.utils.JwtTokenUtil;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserService {
	
	private final UserRepository userRepository;
	private final BCryptPasswordEncoder encoder;
	
	@Value("${jwt.token.secret}")
	private String key;
	
	private Long expireTimeMs = 1000 * 60 * 60l; // 1h

	
	public String join(UserJoinRequestDto dto) {
		
		Optional<User> userCheck = userRepository.findByUserId(dto.getUserId());
		
		// userId 중복인 경우
		if(userCheck.isPresent()) {
			return "FAIL";
		}
		
		// 아닌 경우, 저장
		User user = User.builder()
				.userId(dto.getUserId())
				.userPw(encoder.encode(dto.getUserPw()))
				.userName(dto.getUserName())
				.userNickname(dto.getUserNickname())
				.userBirth(dto.getUserBirth())
				.userEmail(dto.getUserEmail())
				.userRole(Role.USER)
				.build();
		
		userRepository.save(user);
		
		return "SUCCESS";
	}
	
	public Map login(String userId, String userPw) {
		
		Map result = new HashMap();
		
		// userId 없음
		Optional<User> selectedUser = userRepository.findByUserId(userId);
		
		if(selectedUser.orElse(null) == null) {
			result.put("response", "noid");
			return result;
		}
		// userPw 틀림
		if(!encoder.matches(userPw, selectedUser.get().getUserPw())) {
			result.put("response", "wrongpw");
			return result;
		}
		
		// 앞에서 Exception 안났으면 토큰 발행
		String token = JwtTokenUtil.createToken(selectedUser.get().getUserId(), key, expireTimeMs);
		result.put("response", "ok");
		result.put("token", token);
		result.put("userNickname", selectedUser.get().getUserNickname());
		return result;
	}
}
