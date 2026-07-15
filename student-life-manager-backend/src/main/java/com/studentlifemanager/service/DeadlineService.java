package com.studentlifemanager.service;

import com.studentlifemanager.model.Deadline;
import com.studentlifemanager.model.User;
import com.studentlifemanager.repository.DeadlineRepository;
import com.studentlifemanager.security.SecurityUtil;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public Deadline addDeadline(
            Deadline deadline
    ) {

        User currentUser = securityUtil.getCurrentUser();

        deadline.setUserId(currentUser.getId());

        return deadlineRepository.save(deadline);

    }

    public List<Deadline> getAllDeadlines() {

        User currentUser = securityUtil.getCurrentUser();

        return deadlineRepository.findByUserId(currentUser.getId());

    }

    public Deadline updateDeadline(
            String id,
            Deadline updatedDeadline
    ) {

        User currentUser = securityUtil.getCurrentUser();

        Deadline deadline = deadlineRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Deadline not found"));

        if (!deadline.getUserId().equals(currentUser.getId())) {
            throw new RuntimeException("Access denied");
        }

        deadline.setTitle(updatedDeadline.getTitle());
        deadline.setDueDate(updatedDeadline.getDueDate());
        deadline.setPriority(updatedDeadline.getPriority());

        return deadlineRepository.save(deadline);

    }

    public void deleteDeadline(
            String id
    ) {

        User currentUser = securityUtil.getCurrentUser();

        Deadline deadline = deadlineRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Deadline not found"));

        if (!deadline.getUserId().equals(currentUser.getId())) {
            throw new RuntimeException("Access denied");
        }

        deadlineRepository.delete(deadline);

    }

}