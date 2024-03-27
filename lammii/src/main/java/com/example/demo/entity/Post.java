package com.example.demo.entity;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@SequenceGenerator(
		name = "POST_ID_SEQ_GENERATOR"
	    , sequenceName = "POST_ID_SEQ"
	    , initialValue = 1
	    , allocationSize = 1
	)
@EntityListeners(AuditingEntityListener.class)
public class Post extends Time{
	
	@Id
	@GeneratedValue(
	    	strategy = GenerationType.SEQUENCE
	    	, generator = "POST_ID_SEQ_GENERATOR"
	    )
	private Integer postId;
	
	@Column(length = 50)
	private String userId;
	
	@Column(length = 200)
	private String postTitle;
	
	@Column(length = 4000)
	private String postContent;
	
	@Builder
	public Post(String userId, String postTitle, String postContent) {
		this.userId = userId;
		this.postTitle = postTitle;
		this.postContent = postContent;
	}
	
	public void update(String postTitle, String postContent) {
		this.postTitle = postTitle;
		this.postContent = postContent;
	}
	
}
