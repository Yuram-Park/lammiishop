package com.example.demo.controller;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithAnonymousUser;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import com.example.demo.dto.UserJoinRequestDto;
import com.example.demo.dto.UserLoginRequestDto;
import com.example.demo.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;

@WebMvcTest
public class UserControllerTest {

	@Autowired
	MockMvc mockMvc;
	
	@MockBean
	UserService userService;
	
	@Autowired
	ObjectMapper objectMapper; // java object를 json으로 만들어줌
	
	@Test
	@DisplayName("회원가입 성공")
	@WithMockUser
	void join() throws Exception {
		String userId = "yooram";
		String userPw = "1234";
		
		mockMvc.perform(post("/user/join")
				.with(csrf())
				.contentType(MediaType.APPLICATION_JSON)
				.content(objectMapper.writeValueAsBytes(new UserJoinRequestDto(userId, userPw))))
				.andDo(print())
				.andExpect(status().isOk());
	}
	
	@Test
	@DisplayName("회원가입 실패 - userId 중복")
	@WithMockUser
	void join_fail() throws Exception {
		String userId = "yooram";
		String userPw = "1234";
		
		//when(userService.join(any(),  any()))
		//	.thenThrow(new RuntimeException("해당 userId가 중복됩니다."));
		
		mockMvc.perform(post("/user/join")
				.with(csrf())
				.contentType(MediaType.APPLICATION_JSON)
				.content(objectMapper.writeValueAsBytes(new UserJoinRequestDto(userId, userPw))))
				.andDo(print())
				.andExpect(status().isConflict());
	}
	
	@Test
	@DisplayName("로그인 성공")
	@WithMockUser
	void login_success() throws Exception {
		String userId = "yooram";
		String userPw = "1234";
		
		//when(userService.login(any(),  any()))
		//	.thenRetun("token");
		
		mockMvc.perform(post("/user/login")
				.with(csrf())
				.contentType(MediaType.APPLICATION_JSON)
				.content(objectMapper.writeValueAsBytes(new UserLoginRequestDto(userId, userPw))))
				.andDo(print())
				.andExpect(status().isOk());
	}
	
	@Test
	@DisplayName("로그인 실패 - userId 없음")
	@WithMockUser
	void loin_fail() throws Exception {
		String userId = "yooram";
		String userPw = "1234";
		
		//when(userService.login(any(),  any()))
		//	.thenThrow(new AppException(ErrorCode.USERNAME_NOT_FOUND, ""));
		
		mockMvc.perform(post("/user/login")
				.with(csrf())
				.contentType(MediaType.APPLICATION_JSON)
				.content(objectMapper.writeValueAsBytes(new UserJoinRequestDto(userId, userPw))))
				.andDo(print())
				.andExpect(status().isNotFound());
	}
	
	@Test
	@DisplayName("로그인 실패 - userPw 틀림")
	@WithMockUser
	void loin_fail2() throws Exception {
		String userId = "yooram";
		String userPw = "1234";
		
		//when(userService.login(any(),  any()))
		//	.thenThrow(new AppException(ErrorCode.INVALID_PASSWORD, ""));
		
		mockMvc.perform(post("/user/login")
				.with(csrf())
				.contentType(MediaType.APPLICATION_JSON)
				.content(objectMapper.writeValueAsBytes(new UserJoinRequestDto(userId, userPw))))
				.andDo(print())
				.andExpect(status().isUnauthorized());
	}
}
