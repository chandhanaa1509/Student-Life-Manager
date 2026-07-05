package com.studentlifemanager.dto.internship;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;

@Data
public class InternshipRequest {

    @NotBlank(message = "Company name is required")
    private String companyName;

    @NotBlank(message = "Job role is required")
    private String jobRole;

    @NotBlank(message = "Status is required")
    private String status;

    @NotNull(message = "Applied date is required")
    private LocalDate appliedDate;

    private String applicationUrl;

    private String notes;
}