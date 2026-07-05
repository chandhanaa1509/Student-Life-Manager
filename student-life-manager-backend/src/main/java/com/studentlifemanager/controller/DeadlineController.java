package com.studentlifemanager.controller;

import com.studentlifemanager.dto.deadline.DeadlineRequest;
import com.studentlifemanager.dto.deadline.DeadlineResponse;
import com.studentlifemanager.service.DeadlineService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/deadlines")
public class DeadlineController {

    private final DeadlineService deadlineService;

    public DeadlineController(DeadlineService deadlineService) {
        this.deadlineService = deadlineService;
    }

    @PostMapping
    public DeadlineResponse createDeadline(
            @Valid @RequestBody DeadlineRequest request) {

        return deadlineService.createDeadline(request);
    }

    @GetMapping
    public List<DeadlineResponse> getAllDeadlines() {
        return deadlineService.getAllDeadlines();
    }

    @GetMapping("/{id}")
    public DeadlineResponse getDeadlineById(@PathVariable String id) {
        return deadlineService.getDeadlineById(id);
    }

    @PutMapping("/{id}")
    public DeadlineResponse updateDeadline(
            @PathVariable String id,
            @Valid @RequestBody DeadlineRequest request) {

        return deadlineService.updateDeadline(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteDeadline(@PathVariable String id) {
        deadlineService.deleteDeadline(id);
    }
}