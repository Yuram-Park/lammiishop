package com.example.demo.entity;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@SequenceGenerator(
		name = "CART_ID_SEQ_GENERATOR"
	    , sequenceName = "CART_ID_SEQ"
	    , initialValue = 1
	    , allocationSize = 1
	)
@EntityListeners(AuditingEntityListener.class)
public class Cart extends Time {

	@Id
	@GeneratedValue(
	    	strategy = GenerationType.SEQUENCE
	    	, generator = "CART_ID_SEQ_GENERATOR"
	    )
	@Column(name="cart_id")
	private Integer cartId;
	
	@ManyToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "product_id", referencedColumnName = "product_id")
	private User user;
	
	private Integer cartTotalQuantity;
	
	private Integer cartTotalPayment;
	
	
}
