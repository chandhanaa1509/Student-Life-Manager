package com.studentlifemanager.service;

import com.studentlifemanager.model.Deadline;
import com.studentlifemanager.repository.DeadlineRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeadlineService {

    private final DeadlineRepository deadlineRepository;

    public DeadlineService(
            DeadlineRepository deadlineRepository
    ) {
        this.deadlineRepository = deadlineRepository;
    }

    public Deadline addDeadline(
            Deadline deadline
    ) {

        return deadlineRepository.save(deadline);

    }

    public List<Deadline> getAllDeadlines() {

        return deadlineRepository.findAll();

    }

    public Deadline updateDeadline(
            String id,
            Deadline updatedDeadline
    ) {

        Deadline deadline = deadlineRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Deadline not found"));

        deadline.setTitle(updatedDeadline.getTitle());
        deadline.setDueDate(updatedDeadline.getDueDate());
        deadline.setPriority(updatedDeadline.getPriority());

        return deadlineRepository.save(deadline);

    }

    public void deleteDeadline(
            String id
    ) {

        deadlineRepository.deleteById(id);

    }

}