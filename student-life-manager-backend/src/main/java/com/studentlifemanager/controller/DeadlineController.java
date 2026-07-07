package com.studentlifemanager.controller;

import com.studentlifemanager.model.Deadline;
import com.studentlifemanager.service.DeadlineService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/deadlines")
public class DeadlineController {

    private final DeadlineService deadlineService;

    public DeadlineController(
            DeadlineService deadlineService
    ) {
        this.deadlineService = deadlineService;
    }

    @PostMapping
    public Deadline addDeadline(
            @RequestBody Deadline deadline
    ) {
        return deadlineService.addDeadline(deadline);
    }

    @GetMapping
    public List<Deadline> getAllDeadlines() {
        return deadlineService.getAllDeadlines();
    }

    @PutMapping("/{id}")
    public Deadline updateDeadline(
            @PathVariable String id,
            @RequestBody Deadline deadline
    ) {
        return deadlineService.updateDeadline(id, deadline);
    }

    @DeleteMapping("/{id}")
    public void deleteDeadline(
            @PathVariable String id
    ) {
        deadlineService.deleteDeadline(id);
    }

}