package com.example.demo.utils;

import java.util.Date;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JwtTokenUtil {
	
	public static String getUserID(String token, String key) {
		return Jwts.parser().setSigningKey(key).parseClaimsJws(token).getBody().get("userId", String.class);
	}
	public static boolean isExpired(String token, String key) {
		return Jwts.parser().setSigningKey(key).parseClaimsJws(token).getBody().getExpiration().before(new Date());
	}

	public static String createToken(String userId, String key, long expireTimeMs) {
		Claims claims = Jwts.claims(); // 일종의 map
		claims.put("userId", userId);
		
		return Jwts.builder()
				.setClaims(claims)
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis()+ expireTimeMs))
				.signWith(SignatureAlgorithm.HS256, key)
				.compact();
	}
}
