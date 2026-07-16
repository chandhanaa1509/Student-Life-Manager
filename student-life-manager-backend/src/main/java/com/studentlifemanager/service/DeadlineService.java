package com.studentlifemanager.service;

import com.studentlifemanager.dto.deadline.DeadlineRequest;
import com.studentlifemanager.dto.deadline.DeadlineResponse;
import com.studentlifemanager.model.Deadline;
import com.studentlifemanager.model.User;
import com.studentlifemanager.repository.DeadlineRepository;
import com.studentlifemanager.security.SecurityUtil;
import org.springframework.stereotype.Service;
import com.studentlifemanager.exception.ResourceNotFoundException;
import com.studentlifemanager.exception.UnauthorizedException;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DeadlineService {

    private final DeadlineRepository deadlineRepository;
    private final SecurityUtil securityUtil;

    public DeadlineService(
            DeadlineRepository deadlineRepository,
            SecurityUtil securityUtil
    ) {
        this.deadlineRepository = deadlineRepository;
        this.securityUtil = securityUtil;
    }

    public DeadlineResponse addDeadline(
            DeadlineRequest request
    ) {

        User currentUser = securityUtil.getCurrentUser();

        Deadline deadline = new Deadline();

        deadline.setTitle(request.getTitle());
        deadline.setDueDate(request.getDueDate());
        deadline.setPriority(request.getPriority());
        deadline.setUserId(currentUser.getId());

        Deadline saved = deadlineRepository.save(deadline);

        return mapToResponse(saved);

    }

    public List<DeadlineResponse> getAllDeadlines() {

        User currentUser = securityUtil.getCurrentUser();

        return deadlineRepository
                .findByUserId(currentUser.getId())
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());

    }

    public DeadlineResponse updateDeadline(
            String id,
            DeadlineRequest request
    ) {

        User currentUser = securityUtil.getCurrentUser();

        Deadline deadline = deadlineRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Deadline not found"));

        if (!deadline.getUserId().equals(currentUser.getId())) {
            throw new UnauthorizedException("Access denied");
        }

        deadline.setTitle(request.getTitle());
        deadline.setDueDate(request.getDueDate());
        deadline.setPriority(request.getPriority());

        Deadline updated = deadlineRepository.save(deadline);

        return mapToResponse(updated);

    }

    public void deleteDeadline(
            String id
    ) {

        User currentUser = securityUtil.getCurrentUser();

        Deadline deadline = deadlineRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Deadline not found"));

        if (!deadline.getUserId().equals(currentUser.getId())) {
            throw new UnauthorizedException("Access denied");
        }

        deadlineRepository.delete(deadline);

    }

    private DeadlineResponse mapToResponse(
            Deadline deadline
    ) {

        DeadlineResponse response = new DeadlineResponse();

        response.setId(deadline.getId());
        response.setTitle(deadline.getTitle());
        response.setDueDate(deadline.getDueDate());
        response.setPriority(deadline.getPriority());

        return response;

    }

}