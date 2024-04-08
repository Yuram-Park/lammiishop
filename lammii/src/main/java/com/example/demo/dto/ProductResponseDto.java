package com.example.demo.dto;

import java.time.LocalDateTime;

import com.example.demo.entity.Product;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter 
@Setter 
@NoArgsConstructor
@Data
public class ProductResponseDto {

	private Integer productId;
	private String productCategory;
	private String productCategoryDetail;
	private String productName;
	private String productInform;
	private Integer productPrice;
	private Integer productQuantity;
	private LocalDateTime createdDate;
	
	public ProductResponseDto(Product product) {
		this.productId = product.getProductId();
		this.productCategory = product.getProductCategory();
		this.productCategoryDetail = product.getProductCategoryDetail();
		this.productName = product.getProductName();
		this.productInform = product.getProductInform();
		this.productPrice = product.getProductPrice();
		this.productQuantity = product.getProductQuantity();
		this.createdDate = product.getCreatedDate();
	}
}
