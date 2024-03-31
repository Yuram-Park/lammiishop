package com.example.demo.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.example.demo.service.UserService;

import lombok.RequiredArgsConstructor;

// AuthenticationFilter : 모든 Http Request가 통과

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class AuthenticationConfig {

	private final UserService userService;
	
	@Value("${jwt.token.secret}")
	private String key;
	
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
		return httpSecurity
				.httpBasic(h -> h.disable())
				.csrf(cs -> cs.disable())
				.cors(Customizer.withDefaults())
				.authorizeHttpRequests(authorize -> 
					authorize
					.requestMatchers("/user/login", "user/join", "/**").permitAll() //join, login은 언제나 가능
					.requestMatchers(HttpMethod.POST, "/post/**").authenticated()
				)
				.sessionManagement(session ->
					session
					.sessionCreationPolicy(SessionCreationPolicy.STATELESS) // jwt 사용하는 경우 씀
				)
				.addFilterBefore(new JwtFilter(userService, key), UsernamePasswordAuthenticationFilter.class)
				.build();
	}
	
}
