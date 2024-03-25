package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Test;
import com.example.demo.service.TestService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class MainController {
	
	private final TestService testService;
	
	@GetMapping("/test/{id}")
	public Optional<Test> goTest(@PathVariable(name="id") int id) {
		Optional<Test> test = testService.getTest(id);
		return test;
	}
	
}
