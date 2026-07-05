package com.studentlifemanager.controller;

import com.studentlifemanager.model.Assignment;
import com.studentlifemanager.service.AssignmentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/assignments")
public class AssignmentController {

    private final AssignmentService assignmentService;

    public AssignmentController(AssignmentService assignmentService) {
        this.assignmentService = assignmentService;
    }

    @PostMapping
    public Assignment addAssignment(@RequestBody Assignment assignment) {
        return assignmentService.addAssignment(assignment);
    }

    @GetMapping
    public List<Assignment> getAllAssignments() {
        return assignmentService.getAllAssignments();
    }

    @PutMapping("/{id}")
    public Assignment updateAssignment(
            @PathVariable String id,
            @RequestBody Assignment assignment) {

        return assignmentService.updateAssignment(id, assignment);
    }

    @DeleteMapping("/{id}")
    public void deleteAssignment(@PathVariable String id) {
        assignmentService.deleteAssignment(id);
    }
}