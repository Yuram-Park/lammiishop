package com.example.demo.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.demo.dto.PostRequestDto;
import com.example.demo.dto.PostResponseDto;
import com.example.demo.entity.Post;
import com.example.demo.repository.PostRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class PostService {

	private final PostRepository postRepository;
	
	public List<PostResponseDto> getPostList() {
		List<Post> entity = postRepository.findAll();
		List<PostResponseDto> postList = entity.stream().map(PostResponseDto::new).collect(Collectors.toList());
		return postList;
	}
	
	public PostResponseDto getPostOne(int post_id) {
		Post post = postRepository.findById(post_id).orElseThrow();
		return new PostResponseDto(post);
	}
	
	public void setPost(PostRequestDto postDto) {
		postDto.setUserId("푸들조아");
		postRepository.save(postDto.toEntity());
	}
	
	public void deletePost(int post_id) {
		postRepository.deleteById(post_id);
	}
	
	@Transactional
	public void updatePost(int post_id, PostRequestDto postDto) {
		Post post = postRepository.findById(post_id).orElseThrow();
		post.update(postDto.getPostTitle(), postDto.getPostContent());
	}
}
