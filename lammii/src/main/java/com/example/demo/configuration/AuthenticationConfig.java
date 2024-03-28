package com.example.demo.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

// AuthenticationFilter : 모든 Http Request가 통과

@Configuration
@EnableWebSecurity
public class AuthenticationConfig {

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
		return httpSecurity
				.httpBasic(h -> h.disable())
				.csrf(cs -> cs.disable())
				.cors(Customizer.withDefaults())
				.authorizeHttpRequests(authorize -> 
					authorize
					.requestMatchers("/user/login", "user/join").permitAll() //join, login은 언제나 가능
					.requestMatchers(HttpMethod.POST, "/post/**").authenticated()
				)
				.sessionManagement(session ->
					session
					.sessionCreationPolicy(SessionCreationPolicy.STATELESS) // jwt 사용하는 경우 씀
				)
				//.addFilterBefore(new JwtTokenFilter(userService, secretKey), UsernamePasswordAuthenticationFilter.class)
				.build();
	}
	
}
