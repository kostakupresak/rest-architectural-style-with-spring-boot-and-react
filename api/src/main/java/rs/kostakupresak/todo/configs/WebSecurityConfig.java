package rs.kostakupresak.todo.configs;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
public class WebSecurityConfig implements WebMvcConfigurer {
    @Value("#{'${todo.cors.allowedOrigins}'.split(',')}")
    private List<String> allowedOrigins;

    @Value("#{'${todo.cors.allowedMethods}'.split(',')}")
    private List<String> allowedMethods;

    @Value("#{'${todo.cors.allowedHeaders}'.split(',')}")
    private List<String> allowedHeaders;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(this.allowedOrigins);
        configuration.setAllowedMethods(this.allowedMethods);
        configuration.setAllowedHeaders(this.allowedHeaders);

        http.cors().configurationSource(request -> configuration);

        http.csrf().disable();
        http.authorizeHttpRequests(authorizationManagerRequestMatcherRegistry ->
                authorizationManagerRequestMatcherRegistry.anyRequest().permitAll());

        return http.build();
    }
}
