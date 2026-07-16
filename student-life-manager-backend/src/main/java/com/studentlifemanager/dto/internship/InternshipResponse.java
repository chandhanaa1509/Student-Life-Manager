package com.studentlifemanager.dto.internship;

import lombok.Data;

import java.time.LocalDate;

@Data
public class InternshipResponse {

    private String id;

    private String company;

    private String role;

    private String status;

    private LocalDate applicationDeadline;
}