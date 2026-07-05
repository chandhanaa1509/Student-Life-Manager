// Purpose:
// Exposes REST APIs for Study Resources.

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

    public ResourceController(ResourceService resourceService) {
        this.resourceService = resourceService;
    }

    @PostMapping
    public ResourceResponse createResource(
            @Valid @RequestBody ResourceRequest request) {

        return resourceService.createResource(request);
    }

    @GetMapping
    public List<ResourceResponse> getAllResources() {
        return resourceService.getAllResources();
    }

    @GetMapping("/{id}")
    public ResourceResponse getResourceById(@PathVariable String id) {
        return resourceService.getResourceById(id);
    }

    @PutMapping("/{id}")
    public ResourceResponse updateResource(
            @PathVariable String id,
            @Valid @RequestBody ResourceRequest request) {

        return resourceService.updateResource(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteResource(@PathVariable String id) {
        resourceService.deleteResource(id);
    }
}