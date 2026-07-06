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

}