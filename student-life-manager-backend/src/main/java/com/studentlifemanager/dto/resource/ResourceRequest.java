// Purpose:
// DTO used when creating or updating a study resource.

package com.studentlifemanager.dto.resource;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ResourceRequest {

    @NotBlank(message = "Title is required")
    private String title;

    @NotBlank(message = "Subject is required")
    private String subject;

    @NotBlank(message = "Resource type is required")
    private String resourceType;

    @NotBlank(message = "URL is required")
    private String url;

    private String description;
}