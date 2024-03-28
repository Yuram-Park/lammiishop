package com.example.demo.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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
	public PostResponseDto getPostOne(@PathVariable("post_id") Integer post_id) {
		return postService.getPostOne(post_id);
	}

	@PutMapping("/post")
	public void setPost(@RequestBody PostRequestDto postDto) {
		postService.setPost(postDto);
	}
	
	
	@PostMapping("/reviews")
	public ResponseEntity<String> writeReview(){
		return ResponseEntity.ok().body("리뷰 등록이 완료되었습니다.");
	}
	
}
