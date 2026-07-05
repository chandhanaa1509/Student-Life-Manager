// Purpose:
// Represents a personal note created by a user.

package com.studentlifemanager.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "notes")
public class Note {

    @Id
    private String id;

    private String title;

    private String content;

    private String category;

    private String userId;
}