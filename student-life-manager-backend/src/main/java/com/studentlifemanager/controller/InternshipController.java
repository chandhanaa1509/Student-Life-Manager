package com.studentlifemanager.controller;

import com.studentlifemanager.model.Internship;
import com.studentlifemanager.service.InternshipService;
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
    public Internship addInternship(
            @RequestBody Internship internship
    ) {
        return internshipService.addInternship(internship);
    }

    @GetMapping
    public List<Internship> getAllInternships() {
        return internshipService.getAllInternships();
    }

    @PutMapping("/{id}")
    public Internship updateInternship(
            @PathVariable String id,
            @RequestBody Internship internship
    ) {
        return internshipService.updateInternship(id, internship);
    }

    @DeleteMapping("/{id}")
    public void deleteInternship(
            @PathVariable String id
    ) {
        internshipService.deleteInternship(id);
    }

}