package com.studentlifemanager.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "assignments")
public class Assignment {

    @Id
    private String id;

    private String title;

    private String subject;

    private LocalDate dueDate;

    private String status;
}