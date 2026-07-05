// Purpose:
// Represents a study resource saved by a user.

package com.studentlifemanager.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "resources")
public class Resource {

    @Id
    private String id;

    private String title;

    private String subject;

    private String resourceType;

    private String url;

    private String description;

    private String userId;
}