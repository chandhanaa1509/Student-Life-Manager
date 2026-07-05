// Purpose:
// DTO returned to the client after resource operations.

package com.studentlifemanager.dto.resource;

import lombok.Data;

@Data
public class ResourceResponse {

    private String id;

    private String title;

    private String subject;

    private String resourceType;

    private String url;

    private String description;
}