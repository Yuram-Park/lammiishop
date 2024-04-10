package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{

	List<Product> findAllByProductCategory(String productCategory);
	
	List<Product> findAllByProductCategoryAndProductCategoryDetail(String productCategory, String productCategoryDetail);
	
	@Query(value = "select a.* from product a LEFT OUTER join product_img b ON a.product_id = b.product_id where a.product_category = :productCategory", nativeQuery = true)
	Product findByProductCategory(@Param("productCategory") String productCategory);
}
