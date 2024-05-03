package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.ProductImg;

@Repository
public interface ProductImgRepository extends JpaRepository<ProductImg, Integer>{

	ProductImg findByProduct_ProductId(int productId);
	
	List<ProductImg> findAllByProduct_ProductId(int productId);
}
