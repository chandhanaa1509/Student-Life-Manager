package com.studentlifemanager.controller;

import com.studentlifemanager.dto.internship.InternshipRequest;
import com.studentlifemanager.dto.internship.InternshipResponse;
import com.studentlifemanager.service.InternshipService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/internships")
public class InternshipController {

    private final InternshipService internshipService;

    public InternshipController(
            InternshipService internshipService
    ) {
        this.internshipService = internshipService;
    }

    @PostMapping
    public InternshipResponse addInternship(
            @Valid @RequestBody InternshipRequest request
    ) {

        return internshipService.addInternship(request);

    }

    @GetMapping
    public List<InternshipResponse> getAllInternships() {

        return internshipService.getAllInternships();

    }

    @PutMapping("/{id}")
    public InternshipResponse updateInternship(
            @PathVariable String id,
            @Valid @RequestBody InternshipRequest request
    ) {

        return internshipService.updateInternship(id, request);

    }

    @DeleteMapping("/{id}")
    public void deleteInternship(
            @PathVariable String id
    ) {

        internshipService.deleteInternship(id);

    }

}