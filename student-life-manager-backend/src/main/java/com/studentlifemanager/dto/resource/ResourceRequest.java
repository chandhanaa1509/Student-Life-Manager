package com.studentlifemanager.dto.resource;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ResourceRequest {

    @NotBlank(message = "Title is required")
    private String title;

    @NotBlank(message = "Link is required")
    private String link;

    @NotBlank(message = "Category is required")
    private String category;
}