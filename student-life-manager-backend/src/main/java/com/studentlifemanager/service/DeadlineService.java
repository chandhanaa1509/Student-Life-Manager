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

}