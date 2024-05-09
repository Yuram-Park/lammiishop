package com.example.demo.entity;


import com.example.demo.dto.Role;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User {

	@Id
	@Column(name="user_id")
	private String userId;
	
	@Column(nullable = false)
	private String userPw;
	
	@Column(length = 10)
	private String userName;
	
	@Column(length = 50)
	private String userNickname;
	
	@Column
	private String userBirth;
	
	@Column(length = 50)
	private String userEmail;
	
	@Enumerated(EnumType.STRING)
	private Role userRole;
	
}
