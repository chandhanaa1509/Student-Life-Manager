package com.studentlifemanager.service;

import com.studentlifemanager.dto.internship.InternshipRequest;
import com.studentlifemanager.dto.internship.InternshipResponse;
import com.studentlifemanager.model.Internship;
import com.studentlifemanager.model.User;
import com.studentlifemanager.repository.InternshipRepository;
import com.studentlifemanager.security.SecurityUtil;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class InternshipService {

    private final InternshipRepository internshipRepository;
    private final SecurityUtil securityUtil;

    public InternshipService(
            InternshipRepository internshipRepository,
            SecurityUtil securityUtil
    ) {
        this.internshipRepository = internshipRepository;
        this.securityUtil = securityUtil;
    }

    public InternshipResponse addInternship(
            InternshipRequest request
    ) {

        User currentUser = securityUtil.getCurrentUser();

        Internship internship = new Internship();

        internship.setCompany(request.getCompany());
        internship.setRole(request.getRole());
        internship.setStatus(request.getStatus());
        internship.setApplicationDeadline(request.getApplicationDeadline());
        internship.setUserId(currentUser.getId());

        Internship saved = internshipRepository.save(internship);

        return mapToResponse(saved);

    }

    public List<InternshipResponse> getAllInternships() {

        User currentUser = securityUtil.getCurrentUser();

        return internshipRepository
                .findByUserId(currentUser.getId())
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());

    }

    public InternshipResponse updateInternship(
            String id,
            InternshipRequest request
    ) {

        User currentUser = securityUtil.getCurrentUser();

        Internship internship = internshipRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Internship not found"));

        if (!internship.getUserId().equals(currentUser.getId())) {
            throw new RuntimeException("Access denied");
        }

        internship.setCompany(request.getCompany());
        internship.setRole(request.getRole());
        internship.setStatus(request.getStatus());
        internship.setApplicationDeadline(request.getApplicationDeadline());

        Internship updated = internshipRepository.save(internship);

        return mapToResponse(updated);

    }

    public void deleteInternship(
            String id
    ) {

        User currentUser = securityUtil.getCurrentUser();

        Internship internship = internshipRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Internship not found"));

        if (!internship.getUserId().equals(currentUser.getId())) {
            throw new RuntimeException("Access denied");
        }

        internshipRepository.delete(internship);

    }

    private InternshipResponse mapToResponse(
            Internship internship
    ) {

        InternshipResponse response = new InternshipResponse();

        response.setId(internship.getId());
        response.setCompany(internship.getCompany());
        response.setRole(internship.getRole());
        response.setStatus(internship.getStatus());
        response.setApplicationDeadline(internship.getApplicationDeadline());

        return response;

    }

}