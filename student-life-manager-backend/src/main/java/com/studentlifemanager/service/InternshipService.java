package com.studentlifemanager.service;

import com.studentlifemanager.model.Internship;
import com.studentlifemanager.model.User;
import com.studentlifemanager.repository.InternshipRepository;
import com.studentlifemanager.security.SecurityUtil;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public Internship addInternship(
            Internship internship
    ) {

        User currentUser = securityUtil.getCurrentUser();

        internship.setUserId(currentUser.getId());

        return internshipRepository.save(internship);

    }

    public List<Internship> getAllInternships() {

        User currentUser = securityUtil.getCurrentUser();

        return internshipRepository.findByUserId(currentUser.getId());

    }

    public Internship updateInternship(
            String id,
            Internship updatedInternship
    ) {

        User currentUser = securityUtil.getCurrentUser();

        Internship internship = internshipRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Internship not found"));

        if (!internship.getUserId().equals(currentUser.getId())) {
            throw new RuntimeException("Access denied");
        }

        internship.setCompany(updatedInternship.getCompany());
        internship.setRole(updatedInternship.getRole());
        internship.setStatus(updatedInternship.getStatus());
        internship.setApplicationDeadline(updatedInternship.getApplicationDeadline());

        return internshipRepository.save(internship);

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

}