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

    public AssignmentController(AssignmentService assignmentService) {
        this.assignmentService = assignmentService;
    }

    // Create Assignment
    @PostMapping
    public AssignmentResponse createAssignment(
            @Valid @RequestBody AssignmentRequest request) {

        return assignmentService.createAssignment(request);
    }

    // Get All Assignments
    @GetMapping
    public List<AssignmentResponse> getAllAssignments() {
        return assignmentService.getAllAssignments();
    }

    // Get Assignment By Id
    @GetMapping("/{id}")
    public AssignmentResponse getAssignmentById(
            @PathVariable String id) {

        return assignmentService.getAssignmentById(id);
    }

    // Update Assignment
    @PutMapping("/{id}")
    public AssignmentResponse updateAssignment(
            @PathVariable String id,
            @Valid @RequestBody AssignmentRequest request) {

        return assignmentService.updateAssignment(id, request);
    }

    // Delete Assignment
    @DeleteMapping("/{id}")
    public void deleteAssignment(
            @PathVariable String id) {

        assignmentService.deleteAssignment(id);
    }
}