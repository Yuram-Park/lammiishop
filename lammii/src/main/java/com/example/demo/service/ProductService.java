package com.example.demo.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.demo.dto.ProductResponseDto;
import com.example.demo.entity.Product;
import com.example.demo.repository.ProductRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductService {

	private final ProductRepository productRepository;
	
	public List<ProductResponseDto> getProductList(String category) {
		List<Product> productEntity = productRepository.findAllByProductCategory(category);
		List<ProductResponseDto> productList = productEntity.stream().map(ProductResponseDto::new).collect(Collectors.toList());
		
		return productList;
	}
}
