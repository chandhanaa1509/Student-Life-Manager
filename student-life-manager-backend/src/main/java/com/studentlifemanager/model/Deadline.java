// Purpose:
// Represents an important deadline.

package com.studentlifemanager.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Data
@Document(collection = "deadlines")
public class Deadline {

    @Id
    private String id;

    private String title;

    private String deadlineType;

    private LocalDate dueDate;

    private boolean completed;

    private String userId;
}