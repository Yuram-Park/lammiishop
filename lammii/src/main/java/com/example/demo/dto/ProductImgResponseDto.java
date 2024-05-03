package com.example.demo.dto;

import com.example.demo.entity.ProductImg;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter 
@Setter 
@NoArgsConstructor
@Data
public class ProductImgResponseDto {
	
	private String productImgUrl;
	
	public ProductImgResponseDto(ProductImg productImg) {
		this.productImgUrl = productImg.getProductImgUrl();
	}
}
