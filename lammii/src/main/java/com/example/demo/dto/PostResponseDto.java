package com.example.demo.dto;

import java.time.LocalDateTime;

import com.example.demo.entity.Post;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter 
@Setter 
@NoArgsConstructor
@Data
public class PostResponseDto {

	private Integer postId;
	private String userId;
	private String postTitle;
	private String postContent;
	private LocalDateTime createdDate;
	private LocalDateTime modifiedDate;
	
	public PostResponseDto(Post post) {
		this.postId = post.getPostId();
		this.userId = post.getUserId();
		this.postTitle = post.getPostTitle();
		this.postContent = post.getPostContent();
		this.createdDate = post.getCreatedDate();
		this.modifiedDate = post.getModifiedDate();
	}

}
