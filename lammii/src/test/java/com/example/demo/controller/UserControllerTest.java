package com.example.demo.controller;

import static org.hamcrest.CoreMatchers.any;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.example.demo.dto.UserJoinRequestDto;
import com.example.demo.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
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
	void join() throws Exception {
		String userId = "yooram";
		String userPw = "1234";
		
		mockMvc.perform(post("/user/join")
				.contentType(MediaType.APPLICATION_JSON)
				.content(objectMapper.writeValueAsBytes(new UserJoinRequestDto(userId, userPw))))
				.andDo(print())
				.andExpect(status().isOk());
	}
	
	@Test
	@DisplayName("회원가입 실패 - userId 중복")
	void join_fail() throws Exception {
		String userId = "yooram";
		String userPw = "1234";
		
		//when(userService.join(any(),  any()))
		//	.thenThrow(new RuntimeException("해당 userId가 중복됩니다."));
		
		mockMvc.perform(post("/user/join")
				.contentType(MediaType.APPLICATION_JSON)
				.content(objectMapper.writeValueAsBytes(new UserJoinRequestDto(userId, userPw))))
				.andDo(print())
				.andExpect(status().isConflict());
	}
}
