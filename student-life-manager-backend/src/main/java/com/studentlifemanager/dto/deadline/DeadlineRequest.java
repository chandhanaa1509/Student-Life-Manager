package com.studentlifemanager.dto.deadline;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;

@Data
public class DeadlineRequest {

    @NotBlank(message = "Title is required")
    private String title;

    @NotBlank(message = "Deadline type is required")
    private String deadlineType;

    @NotNull(message = "Due date is required")
    private LocalDate dueDate;
}