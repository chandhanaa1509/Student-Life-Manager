package com.studentlifemanager.controller;

import com.studentlifemanager.dto.resource.ResourceRequest;
import com.studentlifemanager.dto.resource.ResourceResponse;
import com.studentlifemanager.service.ResourceService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/resources")
public class ResourceController {

    private final ResourceService resourceService;

    public ResourceController(
            ResourceService resourceService) {

        this.resourceService = resourceService;
    }

    @PostMapping
    public ResourceResponse addResource(
            @Valid @RequestBody ResourceRequest request) {

        return resourceService.addResource(request);
    }

    @GetMapping
    public List<ResourceResponse> getAllResources() {

        return resourceService.getAllResources();
    }

}