package com.example.demo.controller;

import java.util.Map;

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
		String result = userService.join(dto);
		if(result.equals("FAIL")) {
			return ResponseEntity.badRequest().body("중복된 아이디입니다.");
		} else {
			return ResponseEntity.ok().body("회원가입 성공");
		}
	}
	
	@PostMapping("/login")
	public ResponseEntity<Map> login(@RequestBody UserLoginRequestDto dto){
		Map result = (Map) userService.login(dto.getUserId(), dto.getUserPw());
		if(result.get("response").equals("ok")) {
			return ResponseEntity.ok().body(result);
		} else {
			return ResponseEntity.badRequest().body(result);
		}
	}
}
