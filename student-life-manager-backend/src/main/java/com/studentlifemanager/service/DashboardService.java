package com.studentlifemanager.service;

import com.studentlifemanager.dto.dashboard.DashboardResponse;
import com.studentlifemanager.repository.AssignmentRepository;
import com.studentlifemanager.repository.DeadlineRepository;
import com.studentlifemanager.repository.InternshipRepository;
import com.studentlifemanager.repository.NoteRepository;
import com.studentlifemanager.repository.ResourceRepository;
import org.springframework.stereotype.Service;

@Service
public class DashboardService {

    private final AssignmentRepository assignmentRepository;
    private final NoteRepository noteRepository;
    private final ResourceRepository resourceRepository;
    private final DeadlineRepository deadlineRepository;
    private final InternshipRepository internshipRepository;

    public DashboardService(
            AssignmentRepository assignmentRepository,
            NoteRepository noteRepository,
            ResourceRepository resourceRepository,
            DeadlineRepository deadlineRepository,
            InternshipRepository internshipRepository
    ) {

        this.assignmentRepository = assignmentRepository;
        this.noteRepository = noteRepository;
        this.resourceRepository = resourceRepository;
        this.deadlineRepository = deadlineRepository;
        this.internshipRepository = internshipRepository;

    }

    public DashboardResponse getDashboard() {

        DashboardResponse response = new DashboardResponse();

        response.setAssignments(
                assignmentRepository.count());

        response.setNotes(
                noteRepository.count());

        response.setResources(
                resourceRepository.count());

        response.setDeadlines(
                deadlineRepository.count());

        response.setInternships(
                internshipRepository.count());

        return response;

    }

}