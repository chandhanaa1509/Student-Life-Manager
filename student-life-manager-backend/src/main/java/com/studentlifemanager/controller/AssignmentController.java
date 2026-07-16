package com.studentlifemanager.controller;

import com.studentlifemanager.dto.assignment.AssignmentRequest;
import com.studentlifemanager.dto.assignment.AssignmentResponse;
import com.studentlifemanager.service.AssignmentService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/assignments")
public class AssignmentController {

    private final AssignmentService assignmentService;

    public AssignmentController(
            AssignmentService assignmentService) {

        this.assignmentService = assignmentService;
    }

    @PostMapping
    public AssignmentResponse addAssignment(
            @Valid @RequestBody AssignmentRequest request) {

        return assignmentService.addAssignment(request);
    }

    @GetMapping
    public List<AssignmentResponse> getAllAssignments() {

        return assignmentService.getAllAssignments();
    }

    @PutMapping("/{id}")
    public AssignmentResponse updateAssignment(
            @PathVariable String id,
            @Valid @RequestBody AssignmentRequest request) {

        return assignmentService.updateAssignment(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteAssignment(
            @PathVariable String id) {

        assignmentService.deleteAssignment(id);
    }
}