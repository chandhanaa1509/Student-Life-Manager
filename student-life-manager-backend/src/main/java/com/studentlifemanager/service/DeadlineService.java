package com.studentlifemanager.service;

import com.studentlifemanager.dto.deadline.DeadlineRequest;
import com.studentlifemanager.dto.deadline.DeadlineResponse;
import com.studentlifemanager.model.Deadline;
import com.studentlifemanager.repository.DeadlineRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DeadlineService {

    private final DeadlineRepository deadlineRepository;

    public DeadlineService(DeadlineRepository deadlineRepository) {
        this.deadlineRepository = deadlineRepository;
    }

    public DeadlineResponse createDeadline(DeadlineRequest request) {

        Deadline deadline = new Deadline();

        deadline.setTitle(request.getTitle());
        deadline.setDeadlineType(request.getDeadlineType());
        deadline.setDueDate(request.getDueDate());
        deadline.setCompleted(false);
        deadline.setUserId("demo-user");

        Deadline saved = deadlineRepository.save(deadline);

        return mapToResponse(saved);
    }

    public List<DeadlineResponse> getAllDeadlines() {

        return deadlineRepository.findByUserId("demo-user")
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public DeadlineResponse getDeadlineById(String id) {

        Deadline deadline = deadlineRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Deadline not found"));

        return mapToResponse(deadline);
    }

    public DeadlineResponse updateDeadline(String id,
                                           DeadlineRequest request) {

        Deadline deadline = deadlineRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Deadline not found"));

        deadline.setTitle(request.getTitle());
        deadline.setDeadlineType(request.getDeadlineType());
        deadline.setDueDate(request.getDueDate());

        Deadline updated = deadlineRepository.save(deadline);

        return mapToResponse(updated);
    }

    public void deleteDeadline(String id) {
        deadlineRepository.deleteById(id);
    }

    private DeadlineResponse mapToResponse(Deadline deadline) {

        DeadlineResponse response = new DeadlineResponse();

        response.setId(deadline.getId());
        response.setTitle(deadline.getTitle());
        response.setDeadlineType(deadline.getDeadlineType());
        response.setDueDate(deadline.getDueDate());
        response.setCompleted(deadline.isCompleted());

        return response;
    }
}