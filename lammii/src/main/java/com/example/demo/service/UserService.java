package com.example.demo.service;


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
		User selectedUser = userRepository.findByUserId(userId)
				.orElseThrow(()->new AppException(ErrorCode.USERNAME_NOT_FOUND, userId + "이 없습니다."));
		
		// userPw 틀림
		if(!encoder.matches(userPw, selectedUser.getUserPw())) {
			throw new AppException(ErrorCode.INVALID_PASSWORD, "패스워드를 잘못 입력 했습니다.");
		}
		
		// 앞에서 Exception 안났으면 토큰 발행
		String token = JwtTokenUtil.createToken(selectedUser.getUserId(), key, expireTimeMs);
		
		return token;
	}
}
