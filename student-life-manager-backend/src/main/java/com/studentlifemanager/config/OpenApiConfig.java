package com.studentlifemanager.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI campusFlowAPI() {

        return new OpenAPI()

                .info(

                        new Info()

                                .title("CampusFlow API")

                                .description(
                                        "CampusFlow is a multi-tenant SaaS platform for managing assignments, notes, internships, deadlines and study resources.")

                                .version("2.0.0")

                                .contact(
                                        new Contact()

                                                .name("A. Chandhana")

                                                .email("chandhanaa1509@gmail.com")

                                                .url("https://github.com/chandhanaa1509"))

                                .license(
                                        new License()

                                                .name("MIT License")

                                                .url("https://opensource.org/licenses/MIT"))

                );

    }

}