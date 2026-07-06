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
@Document(collection = "deadlines")
public class Deadline {

    @Id
    private String id;

    private String title;

    private LocalDate dueDate;

    private String priority;

}