package com.example.demo.controller;

import java.util.List;

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
	
	@GetMapping("/list/{category}")
	public List<ProductResponseDto> getProductList(@PathVariable("category") String category) {
		return productService.getProductList(category);
	}
}
