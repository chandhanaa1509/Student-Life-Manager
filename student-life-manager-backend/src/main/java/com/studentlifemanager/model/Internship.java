package com.studentlifemanager.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Data
@Document(collection = "internships")
public class Internship {

    @Id
    private String id;

    private String companyName;

    private String jobRole;

    private String status;

    private LocalDate appliedDate;

    private String applicationUrl;

    private String notes;

    private String userId;
}