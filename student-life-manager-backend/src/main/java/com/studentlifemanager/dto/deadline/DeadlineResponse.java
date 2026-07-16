package com.studentlifemanager.dto.deadline;

import lombok.Data;

import java.time.LocalDate;

@Data
public class DeadlineResponse {

    private String id;

    private String title;

    private LocalDate dueDate;

    private String priority;
}