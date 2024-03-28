package com.example.demo.configuration;


import java.io.IOException;
import java.util.List;

import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;

import com.example.demo.service.UserService;
import com.example.demo.utils.JwtTokenUtil;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RequiredArgsConstructor
@Slf4j
public class JwtFilter extends OncePerRequestFilter{
	
	private final UserService userService;
	
	private final String key;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		
		final String authorization = request.getHeader(HttpHeaders.AUTHORIZATION);
		log.info("authorization:", authorization);
		
		// token 안보내면 block
		if(authorization == null || !authorization.startsWith("Bearer ")) {
			log.error("authorizationn을 잘못 보냈습니다.");
			filterChain.doFilter(request, response);
			return;
		}
		
		// Token 꺼내기
		String token = authorization.split(" ")[1];
		
		// Token이 Expire되었는지 여부
		if(JwtTokenUtil.isExpired(token, key)) {
			log.error("Token이 만료 되었습니다.");
			filterChain.doFilter(request, response);
			return;
		}
		
		// userId Token에서 꺼내기
		String userId = JwtTokenUtil.getUserID(token, key);
		log.info("userId:{}", userId);
		
		
		// 권한 부여
		UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userId, null, List.of(new SimpleGrantedAuthority("USER")));
		
		// Detail을 넣어준다.
		authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
		SecurityContextHolder.getContext().setAuthentication(authenticationToken);
		filterChain.doFilter(request, response);
	}

	
}
