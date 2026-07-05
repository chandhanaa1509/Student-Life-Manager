package com.studentlifemanager.dto.assignment;

import lombok.Data;

import java.time.LocalDate;

@Data
public class AssignmentResponse {

    private String id;

    private String title;

    private String description;

    private LocalDate dueDate;

    private String priority;

    private boolean completed;
}