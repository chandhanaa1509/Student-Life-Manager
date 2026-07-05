package com.studentlifemanager.dto.internship;

import lombok.Data;

import java.time.LocalDate;

@Data
public class InternshipResponse {

    private String id;

    private String companyName;

    private String jobRole;

    private String status;

    private LocalDate appliedDate;

    private String applicationUrl;

    private String notes;
}