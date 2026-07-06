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
@Document(collection = "internships")
public class Internship {

    @Id
    private String id;

    private String company;

    private String role;

    private String status;

    private LocalDate applicationDeadline;

}