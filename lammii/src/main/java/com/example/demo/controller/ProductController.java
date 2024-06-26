package com.example.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.ProductResponseDto;
import com.example.demo.service.ProductService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RequestMapping("/product")
@RestController
public class ProductController {

	private final ProductService productService;
	
	@GetMapping("/list/{category}/{detail}")
	public List<ProductResponseDto> getProductList(@PathVariable("category") String category, @PathVariable("detail") String detail) {
		return productService.getProductList(category, detail.toLowerCase());
	}
	
	// Product detail 1개
	@GetMapping("/detail/{productId}")
	public Map<String, Object> getProductDetail(@PathVariable("productId") int productId) {
		return productService.getProductDetail(productId);
	}
}
