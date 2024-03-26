package com.example.demo.dto;

import com.example.demo.entity.Post;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter 
@Setter 
@NoArgsConstructor
public class PostRequestDto {

	private String userId;
	private String postTitle;
	private String postContent;
	
	public Post toEntity() {
		return Post.builder()
				.userId(userId)
				.postTitle(postTitle)
				.postContent(postContent)
				.build();
				
	}
}
