package com.studentlifemanager.dto.deadline;

import lombok.Data;

import java.time.LocalDate;

@Data
public class DeadlineResponse {

    private String id;

    private String title;

    private String deadlineType;

    private LocalDate dueDate;

    private boolean completed;
}