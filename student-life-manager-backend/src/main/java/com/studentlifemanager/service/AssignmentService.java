package com.studentlifemanager.service;

import com.studentlifemanager.dto.assignment.AssignmentRequest;
import com.studentlifemanager.dto.assignment.AssignmentResponse;
import com.studentlifemanager.model.Assignment;
import com.studentlifemanager.repository.AssignmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AssignmentService {

    private final AssignmentRepository assignmentRepository;

    public AssignmentService(AssignmentRepository assignmentRepository) {
        this.assignmentRepository = assignmentRepository;
    }

    // Create Assignment
    public AssignmentResponse createAssignment(AssignmentRequest request) {

        Assignment assignment = new Assignment();

        assignment.setTitle(request.getTitle());
        assignment.setDescription(request.getDescription());
        assignment.setDueDate(request.getDueDate());
        assignment.setPriority(request.getPriority());

        assignment.setCompleted(false);

        // Temporary userId
        // Later we'll get this from JWT
        assignment.setUserId("demo-user");

        Assignment savedAssignment = assignmentRepository.save(assignment);

        return mapToResponse(savedAssignment);
    }

    // Get All Assignments
    public List<AssignmentResponse> getAllAssignments() {

        return assignmentRepository.findByUserId("demo-user")
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    // Get Assignment By Id
    public AssignmentResponse getAssignmentById(String id) {

        Assignment assignment = assignmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Assignment not found"));

        return mapToResponse(assignment);
    }

    // Update Assignment
    public AssignmentResponse updateAssignment(
            String id,
            AssignmentRequest request) {

        Assignment assignment = assignmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Assignment not found"));

        assignment.setTitle(request.getTitle());
        assignment.setDescription(request.getDescription());
        assignment.setDueDate(request.getDueDate());
        assignment.setPriority(request.getPriority());

        Assignment updatedAssignment =
                assignmentRepository.save(assignment);

        return mapToResponse(updatedAssignment);
    }

    // Delete Assignment
    public void deleteAssignment(String id) {
        assignmentRepository.deleteById(id);
    }

    // Entity → DTO
    private AssignmentResponse mapToResponse(Assignment assignment) {

        AssignmentResponse response = new AssignmentResponse();

        response.setId(assignment.getId());
        response.setTitle(assignment.getTitle());
        response.setDescription(assignment.getDescription());
        response.setDueDate(assignment.getDueDate());
        response.setPriority(assignment.getPriority());
        response.setCompleted(assignment.isCompleted());

        return response;
    }
}