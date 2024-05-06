package com.example.demo.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.demo.dto.ProductImgResponseDto;
import com.example.demo.dto.ProductResponseDto;
import com.example.demo.entity.Product;
import com.example.demo.entity.ProductImg;
import com.example.demo.repository.ProductImgRepository;
import com.example.demo.repository.ProductRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductService {

	private final ProductRepository productRepository;
	private final ProductImgRepository productImgRepository;
	
	public List<ProductResponseDto> getProductList(String category, String detail){
		
		List<Product> productEntity = new ArrayList<Product>();
		
		if(category.equals("ALL")) {
			productEntity = productRepository.findAllWithImg();
		} else if(!category.equals("ALL") && detail.equals("all")) {
			productEntity = productRepository.findAllByProductCategory(category);
		} else {
			productEntity = productRepository.findAllByProductCategoryAndProductCategoryDetail(category, detail);
		}
		
		List<ProductResponseDto> productList = productEntity.stream().map(ProductResponseDto::new).collect(Collectors.toList());
		
		return productList;
	}
	
	// 게시글 1개 불러오기
	public Map<String, Object> getProductDetail(int productId) {
		
		Map<String, Object> productResponse = new HashMap<>();
		Product product = productRepository.findByIdWithOption(productId);
		ProductResponseDto productDto = new ProductResponseDto(product);
		List<ProductImg> productImg = productImgRepository.findAllByProduct_ProductId(productId);
		List<ProductImgResponseDto> productImgDto = productImg.stream().map(ProductImgResponseDto::new).collect(Collectors.toList());
		
		productResponse.put("detail", productDto);
		productResponse.put("img", productImgDto);
		
		return productResponse;
	}

}
