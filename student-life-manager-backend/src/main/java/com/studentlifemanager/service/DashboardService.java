package com.studentlifemanager.service;

import com.studentlifemanager.dto.dashboard.DashboardResponse;
import com.studentlifemanager.model.User;
import com.studentlifemanager.repository.AssignmentRepository;
import com.studentlifemanager.repository.DeadlineRepository;
import com.studentlifemanager.repository.InternshipRepository;
import com.studentlifemanager.repository.NoteRepository;
import com.studentlifemanager.repository.ResourceRepository;
import com.studentlifemanager.security.SecurityUtil;
import org.springframework.stereotype.Service;

@Service
public class DashboardService {

    private final AssignmentRepository assignmentRepository;
    private final NoteRepository noteRepository;
    private final ResourceRepository resourceRepository;
    private final DeadlineRepository deadlineRepository;
    private final InternshipRepository internshipRepository;
    private final SecurityUtil securityUtil;

    public DashboardService(
            AssignmentRepository assignmentRepository,
            NoteRepository noteRepository,
            ResourceRepository resourceRepository,
            DeadlineRepository deadlineRepository,
            InternshipRepository internshipRepository,
            SecurityUtil securityUtil
    ) {

        this.assignmentRepository = assignmentRepository;
        this.noteRepository = noteRepository;
        this.resourceRepository = resourceRepository;
        this.deadlineRepository = deadlineRepository;
        this.internshipRepository = internshipRepository;
        this.securityUtil = securityUtil;

    }

    public DashboardResponse getDashboard() {

        User currentUser = securityUtil.getCurrentUser();

        String userId = currentUser.getId();

        DashboardResponse response = new DashboardResponse();

        response.setAssignments(
                assignmentRepository.countByUserId(userId));

        response.setNotes(
                noteRepository.countByUserId(userId));

        response.setResources(
                resourceRepository.countByUserId(userId));

        response.setDeadlines(
                deadlineRepository.countByUserId(userId));

        response.setInternships(
                internshipRepository.countByUserId(userId));

        return response;

    }

}