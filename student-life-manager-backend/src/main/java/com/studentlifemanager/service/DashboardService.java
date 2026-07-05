// Purpose:
// Builds dashboard summary data.

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
    private final InternshipRepository internshipRepository;
    private final ResourceRepository resourceRepository;
    private final NoteRepository noteRepository;
    private final DeadlineRepository deadlineRepository;

    public DashboardService(
            AssignmentRepository assignmentRepository,
            InternshipRepository internshipRepository,
            ResourceRepository resourceRepository,
            NoteRepository noteRepository,
            DeadlineRepository deadlineRepository) {

        this.assignmentRepository = assignmentRepository;
        this.internshipRepository = internshipRepository;
        this.resourceRepository = resourceRepository;
        this.noteRepository = noteRepository;
        this.deadlineRepository = deadlineRepository;
    }

    public DashboardResponse getDashboard() {

        DashboardResponse response = new DashboardResponse();

        response.setTotalAssignments(
                assignmentRepository.findByUserId("demo-user").size());

        response.setTotalInternships(
                internshipRepository.findByUserId("demo-user").size());

        response.setTotalResources(
                resourceRepository.findByUserId("demo-user").size());

        response.setTotalNotes(
                noteRepository.findByUserId("demo-user").size());

        response.setTotalDeadlines(
                deadlineRepository.findByUserId("demo-user").size());

        response.setRecentAssignments(
                assignmentRepository.findByUserId("demo-user")
        );

        response.setUpcomingDeadlines(
                deadlineRepository.findByUserId("demo-user")
        );

        return response;
    }
}