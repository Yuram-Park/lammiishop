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
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@SequenceGenerator(
		name = "PRODUCT_ID_SEQ_GENERATOR"
	    , sequenceName = "POST_ID_SEQ"
	    , initialValue = 1
	    , allocationSize = 1
	)
@EntityListeners(AuditingEntityListener.class)
public class Product extends Time{

	@Id
	@GeneratedValue(
	    	strategy = GenerationType.SEQUENCE
	    	, generator = "PRODUCT_ID_SEQ_GENERATOR"
	    )
	private Integer productId;
	
	@Column(length = 10)
	private String productCategory;
	
	@Column(length = 10)
	private String productCategoryDetail;
	
	@Column(length = 40)
	private String productName;
	
	@Column(length = 4000)
	private String productInform;
	
	private Integer productPrice;
	
	private Integer productQuantity;
	
	
}
