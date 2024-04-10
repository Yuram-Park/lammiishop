package com.example.demo.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.example.demo.entity.Product;
import com.example.demo.entity.ProductImg;

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
	private List<ProductImg> productImg;
	
	public ProductResponseDto(Product product) {
		this.productId = product.getProductId();
		this.productCategory = product.getProductCategory();
		this.productCategoryDetail = product.getProductCategoryDetail();
		this.productName = product.getProductName();
		this.productInform = product.getProductInform();
		this.productPrice = product.getProductPrice();
		this.productQuantity = product.getProductQuantity();
		this.createdDate = product.getCreatedDate();
		this.productImg = product.getProductImg();
	}
}
