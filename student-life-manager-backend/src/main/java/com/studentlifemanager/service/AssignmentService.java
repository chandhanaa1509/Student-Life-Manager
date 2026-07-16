package com.studentlifemanager.service;

import com.studentlifemanager.dto.assignment.AssignmentRequest;
import com.studentlifemanager.dto.assignment.AssignmentResponse;
import com.studentlifemanager.model.Assignment;
import com.studentlifemanager.model.User;
import com.studentlifemanager.repository.AssignmentRepository;
import com.studentlifemanager.security.SecurityUtil;
import org.springframework.stereotype.Service;
import com.studentlifemanager.exception.ResourceNotFoundException;
import com.studentlifemanager.exception.UnauthorizedException;

import java.util.List;
import java.util.stream.Collectors;

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

    public AssignmentResponse addAssignment(
            AssignmentRequest request) {

        User currentUser = securityUtil.getCurrentUser();

        Assignment assignment = new Assignment();

        assignment.setTitle(request.getTitle());
        assignment.setSubject(request.getSubject());
        assignment.setDueDate(request.getDueDate());
        assignment.setStatus(request.getStatus());
        assignment.setUserId(currentUser.getId());

        Assignment saved =
                assignmentRepository.save(assignment);

        return mapToResponse(saved);
    }

    public List<AssignmentResponse> getAllAssignments() {

        User currentUser = securityUtil.getCurrentUser();

        return assignmentRepository
                .findByUserId(currentUser.getId())
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public AssignmentResponse updateAssignment(
            String id,
            AssignmentRequest request) {

        User currentUser = securityUtil.getCurrentUser();

        Assignment assignment =
                assignmentRepository.findById(id)
                        .orElseThrow(() ->
                                new ResourceNotFoundException("Assignment not found"));

        if (!assignment.getUserId().equals(currentUser.getId())) {
            throw new UnauthorizedException("Access denied");
        }

        assignment.setTitle(request.getTitle());
        assignment.setSubject(request.getSubject());
        assignment.setDueDate(request.getDueDate());
        assignment.setStatus(request.getStatus());

        Assignment updated =
                assignmentRepository.save(assignment);

        return mapToResponse(updated);
    }

    public void deleteAssignment(String id) {

        User currentUser = securityUtil.getCurrentUser();

        Assignment assignment =
                assignmentRepository.findById(id)
                        .orElseThrow(() ->
                                new ResourceNotFoundException("Assignment not found"));

        if (!assignment.getUserId().equals(currentUser.getId())) {
            throw new UnauthorizedException("Access denied");
        }

        assignmentRepository.delete(assignment);
    }

    private AssignmentResponse mapToResponse(
            Assignment assignment) {

        AssignmentResponse response =
                new AssignmentResponse();

        response.setId(assignment.getId());
        response.setTitle(assignment.getTitle());
        response.setSubject(assignment.getSubject());
        response.setDueDate(assignment.getDueDate());
        response.setStatus(assignment.getStatus());

        return response;
    }
}