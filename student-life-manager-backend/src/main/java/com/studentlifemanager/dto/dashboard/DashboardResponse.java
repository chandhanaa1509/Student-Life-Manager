package com.studentlifemanager.dto.dashboard;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DashboardResponse {

    private long assignments;

    private long notes;

    private long resources;

    private long deadlines;

    private long internships;

}


