package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.PostRequestDto;
import com.example.demo.dto.PostResponseDto;
import com.example.demo.service.PostService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RequestMapping("/post")
@RestController
public class PostController {
	
	private final PostService postService;
	
	@GetMapping("/list")
	public List<PostResponseDto> getPostList() {
		System.out.println(postService.getPostList());
		return postService.getPostList();
	}
	
	@GetMapping("/detail/{post_id}")
	public PostResponseDto getPostOne(@PathVariable("post_id") int post_id) {
		return postService.getPostOne(post_id);
	}

	@PutMapping("/post")
	public void setPost(@RequestBody PostRequestDto postDto) {
		postService.setPost(postDto);
	}
	
	@DeleteMapping("/delete/{post_id}")
	public void deletePost(@PathVariable("post_id") int post_id) {
		postService.deletePost(post_id);
	}
	
}
