package com.example.demo.exception;

import org.springframework.http.HttpStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum ErrorCode {
	
	USERNAME_DUPLICATED(HttpStatus.CONFLICT, "");
	
	private HttpStatus httpStatus;
	private String message;
}
