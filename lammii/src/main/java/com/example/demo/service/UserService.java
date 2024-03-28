package com.example.demo.service;


import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.entity.User;
import com.example.demo.exception.AppException;
import com.example.demo.exception.ErrorCode;
import com.example.demo.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserService {
	
	private final UserRepository userRepository;
	private final BCryptPasswordEncoder encoder;

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
}
