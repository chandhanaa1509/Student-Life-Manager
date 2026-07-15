package com.studentlifemanager.service;

import com.studentlifemanager.model.Assignment;
import com.studentlifemanager.model.User;
import com.studentlifemanager.repository.AssignmentRepository;
import com.studentlifemanager.security.SecurityUtil;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AssignmentService {

    private final AssignmentRepository assignmentRepository;
    private final SecurityUtil securityUtil;

    public AssignmentService(
            AssignmentRepository assignmentRepository,
            SecurityUtil securityUtil) {

        this.assignmentRepository = assignmentRepository;
        this.securityUtil = securityUtil;
    }

    public Assignment addAssignment(Assignment assignment) {

        User currentUser = securityUtil.getCurrentUser();

        assignment.setUserId(currentUser.getId());

        return assignmentRepository.save(assignment);
    }

    public List<Assignment> getAllAssignments() {

        User currentUser = securityUtil.getCurrentUser();

        return assignmentRepository.findByUserId(currentUser.getId());
    }

    public Assignment updateAssignment(
            String id,
            Assignment updatedAssignment) {

        User currentUser = securityUtil.getCurrentUser();

        Assignment assignment =
                assignmentRepository.findById(id)
                        .orElseThrow(() ->
                                new RuntimeException("Assignment not found"));

        if (!assignment.getUserId().equals(currentUser.getId())) {
            throw new RuntimeException("Access denied");
        }

        assignment.setTitle(updatedAssignment.getTitle());
        assignment.setSubject(updatedAssignment.getSubject());
        assignment.setDueDate(updatedAssignment.getDueDate());
        assignment.setStatus(updatedAssignment.getStatus());

        return assignmentRepository.save(assignment);
    }

    public void deleteAssignment(String id) {

        User currentUser = securityUtil.getCurrentUser();

        Assignment assignment =
                assignmentRepository.findById(id)
                        .orElseThrow(() ->
                                new RuntimeException("Assignment not found"));

        if (!assignment.getUserId().equals(currentUser.getId())) {
            throw new RuntimeException("Access denied");
        }

        assignmentRepository.delete(assignment);
    }
}