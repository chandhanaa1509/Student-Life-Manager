package com.studentlifemanager.service;

import com.studentlifemanager.model.Internship;
import com.studentlifemanager.repository.InternshipRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InternshipService {

    private final InternshipRepository internshipRepository;

    public InternshipService(
            InternshipRepository internshipRepository
    ) {
        this.internshipRepository = internshipRepository;
    }

    public Internship addInternship(
            Internship internship
    ) {

        return internshipRepository.save(internship);

    }

    public List<Internship> getAllInternships() {

        return internshipRepository.findAll();

    }

    public Internship updateInternship(
            String id,
            Internship updatedInternship
    ) {

        Internship internship = internshipRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Internship not found"));

        internship.setCompany(updatedInternship.getCompany());
        internship.setRole(updatedInternship.getRole());
        internship.setStatus(updatedInternship.getStatus());
        internship.setApplicationDeadline(updatedInternship.getApplicationDeadline());

        return internshipRepository.save(internship);

    }

    public void deleteInternship(
            String id
    ) {

        internshipRepository.deleteById(id);

    }

}