package com.example.demo.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class ProductImg {

	@Id
	private Integer productImgId;
	
	@ManyToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "product_id", referencedColumnName = "product_id")
	private Product product;
	
	@Column(length = 1000)
	private String productImgUrl;
	
}
