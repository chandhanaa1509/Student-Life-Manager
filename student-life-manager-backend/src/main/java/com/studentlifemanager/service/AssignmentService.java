package com.studentlifemanager.service;

import com.studentlifemanager.model.Assignment;
import com.studentlifemanager.repository.AssignmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AssignmentService {

    private final AssignmentRepository assignmentRepository;

    public AssignmentService(AssignmentRepository assignmentRepository) {
        this.assignmentRepository = assignmentRepository;
    }

    public Assignment addAssignment(Assignment assignment) {
        return assignmentRepository.save(assignment);
    }

    public List<Assignment> getAllAssignments() {
        return assignmentRepository.findAll();
    }

    public Assignment updateAssignment(String id, Assignment updatedAssignment) {

        Assignment assignment = assignmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Assignment not found"));

        assignment.setTitle(updatedAssignment.getTitle());
        assignment.setSubject(updatedAssignment.getSubject());
        assignment.setDueDate(updatedAssignment.getDueDate());
        assignment.setStatus(updatedAssignment.getStatus());

        return assignmentRepository.save(assignment);
    }

    public void deleteAssignment(String id) {
        assignmentRepository.deleteById(id);
    }
}