package com.studentlifemanager.controller;

import com.studentlifemanager.dto.dashboard.DashboardResponse;
import com.studentlifemanager.service.DashboardService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DashboardController {

    private final DashboardService dashboardService;

    public DashboardController(
            DashboardService dashboardService
    ) {

        this.dashboardService = dashboardService;

    }

    @GetMapping("/api/dashboard")
    public DashboardResponse getDashboard() {

        return dashboardService.getDashboard();

    }

}