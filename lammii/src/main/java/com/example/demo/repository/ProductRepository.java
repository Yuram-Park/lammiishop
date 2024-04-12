package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{

	@Query(value = "select a.* from product a LEFT OUTER join product_img b ON a.product_id = b.product_id", nativeQuery = true)
	List<Product> findAllWithImg();
	
	@Query(value = "SELECT a.* FROM product a LEFT OUTER JOIN product_img b ON a.product_id = b.product_id WHERE a.product_category = :productCategory", nativeQuery = true)
	List<Product> findAllByProductCategory(@Param("productCategory") String productCategory);
	
	@Query(value = "SELECT a.* FROM product a LEFT OUTER JOIN product_img b ON a.product_id = b.product_id WHERE a.product_category = :productCategory AND a.product_category_detail = :productCategoryDetail", nativeQuery = true)
	List<Product> findAllByProductCategoryAndProductCategoryDetail(@Param("productCategory") String productCategory, @Param("productCategoryDetail") String productCategoryDetail);
	

}
