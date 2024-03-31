package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class UserJoinRequestDto {

	private String userId;
	private String userPw;
	private String userName;
	private String userNickname;
	private String userBirth;
	private String userEmail;
}
