package com.example.demo.service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

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

	
	public String join(String userId, String userPw) {
		
		// userId 중복 체크
		userRepository.findByUserId(userId)
			.ifPresent(user -> {
				throw new AppException( ErrorCode.USERNAME_DUPLICATED, userId + "는 이미 있습니다.");
			});
		
		// 저장
		User user = User.builder()
				.userId(userId)
				.userPw(encoder.encode(userPw))
				.build();
		
		userRepository.save(user);
		
		return "SUCCESS";
	}
	
	public String login(String userId, String userPw) {
		
		// userId 없음
		Optional<User> selectedUser = userRepository.findByUserId(userId);
		
		if(selectedUser.orElse(null) == null) {
			return "NoID";
		}
		// userPw 틀림
		if(!encoder.matches(userPw, selectedUser.get().getUserPw())) {
			return "WorongPw";
		}
		
		// 앞에서 Exception 안났으면 토큰 발행
		String token = JwtTokenUtil.createToken(selectedUser.get().getUserId(), key, expireTimeMs);
		
		return token;
	}
}
