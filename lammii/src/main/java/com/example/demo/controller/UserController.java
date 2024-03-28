package com.example.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.UserJoinRequestDto;
import com.example.demo.dto.UserLoginRequestDto;
import com.example.demo.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {

	private final UserService userService;
	
	@PostMapping("/join")
	public ResponseEntity<String> join(@RequestBody UserJoinRequestDto dto) {
		userService.join(dto.getUserId(), dto.getUserPw());
		return ResponseEntity.ok().body("회원가입 성공");
	}
	
	@PostMapping("/login")
	public ResponseEntity<String> login(@RequestBody UserLoginRequestDto dto){
		String token = userService.login(dto.getUserId(), dto.getUserPw());
		return ResponseEntity.ok().body(token);
	}
}
