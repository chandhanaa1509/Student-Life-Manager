package com.studentlifemanager.service;

import com.studentlifemanager.dto.internship.InternshipRequest;
import com.studentlifemanager.dto.internship.InternshipResponse;
import com.studentlifemanager.model.Internship;
import com.studentlifemanager.repository.InternshipRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class InternshipService {

    private final InternshipRepository internshipRepository;

    public InternshipService(InternshipRepository internshipRepository) {
        this.internshipRepository = internshipRepository;
    }

    public InternshipResponse createInternship(InternshipRequest request) {

        Internship internship = new Internship();

        internship.setCompanyName(request.getCompanyName());
        internship.setJobRole(request.getJobRole());
        internship.setStatus(request.getStatus());
        internship.setAppliedDate(request.getAppliedDate());
        internship.setApplicationUrl(request.getApplicationUrl());
        internship.setNotes(request.getNotes());

        internship.setUserId("demo-user");

        Internship saved = internshipRepository.save(internship);

        return mapToResponse(saved);
    }

    public List<InternshipResponse> getAllInternships() {

        return internshipRepository.findByUserId("demo-user")
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public InternshipResponse getInternshipById(String id) {

        Internship internship = internshipRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Internship not found"));

        return mapToResponse(internship);
    }

    public InternshipResponse updateInternship(String id,
                                               InternshipRequest request) {

        Internship internship = internshipRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Internship not found"));

        internship.setCompanyName(request.getCompanyName());
        internship.setJobRole(request.getJobRole());
        internship.setStatus(request.getStatus());
        internship.setAppliedDate(request.getAppliedDate());
        internship.setApplicationUrl(request.getApplicationUrl());
        internship.setNotes(request.getNotes());

        Internship updated = internshipRepository.save(internship);

        return mapToResponse(updated);
    }

    public void deleteInternship(String id) {
        internshipRepository.deleteById(id);
    }

    private InternshipResponse mapToResponse(Internship internship) {

        InternshipResponse response = new InternshipResponse();

        response.setId(internship.getId());
        response.setCompanyName(internship.getCompanyName());
        response.setJobRole(internship.getJobRole());
        response.setStatus(internship.getStatus());
        response.setAppliedDate(internship.getAppliedDate());
        response.setApplicationUrl(internship.getApplicationUrl());
        response.setNotes(internship.getNotes());

        return response;
    }
}