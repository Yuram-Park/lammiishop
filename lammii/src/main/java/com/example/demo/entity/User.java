package com.example.demo.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
	
	private boolean userRole;
	
}
