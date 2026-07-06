package com.studentlifemanager.controller;

import com.studentlifemanager.model.Resource;
import com.studentlifemanager.service.ResourceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/resources")
public class ResourceController {

    private final ResourceService resourceService;

    public ResourceController(ResourceService resourceService) {
        this.resourceService = resourceService;
    }

    @PostMapping
    public Resource addResource(@RequestBody Resource resource) {
        return resourceService.addResource(resource);
    }

    @GetMapping
    public List<Resource> getAllResources() {
        return resourceService.getAllResources();
    }
}