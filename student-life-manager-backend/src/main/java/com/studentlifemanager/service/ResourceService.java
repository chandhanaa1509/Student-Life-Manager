// Purpose:
// Contains business logic for Study Resources.

package com.studentlifemanager.service;

import com.studentlifemanager.dto.resource.ResourceRequest;
import com.studentlifemanager.dto.resource.ResourceResponse;
import com.studentlifemanager.model.Resource;
import com.studentlifemanager.repository.ResourceRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ResourceService {

    private final ResourceRepository resourceRepository;

    public ResourceService(ResourceRepository resourceRepository) {
        this.resourceRepository = resourceRepository;
    }

    public ResourceResponse createResource(ResourceRequest request) {

        Resource resource = new Resource();

        resource.setTitle(request.getTitle());
        resource.setSubject(request.getSubject());
        resource.setResourceType(request.getResourceType());
        resource.setUrl(request.getUrl());
        resource.setDescription(request.getDescription());

        resource.setUserId("demo-user");

        Resource saved = resourceRepository.save(resource);

        return mapToResponse(saved);
    }

    public List<ResourceResponse> getAllResources() {

        return resourceRepository.findByUserId("demo-user")
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public ResourceResponse getResourceById(String id) {

        Resource resource = resourceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Resource not found"));

        return mapToResponse(resource);
    }

    public ResourceResponse updateResource(String id,
                                           ResourceRequest request) {

        Resource resource = resourceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Resource not found"));

        resource.setTitle(request.getTitle());
        resource.setSubject(request.getSubject());
        resource.setResourceType(request.getResourceType());
        resource.setUrl(request.getUrl());
        resource.setDescription(request.getDescription());

        Resource updated = resourceRepository.save(resource);

        return mapToResponse(updated);
    }

    public void deleteResource(String id) {
        resourceRepository.deleteById(id);
    }

    private ResourceResponse mapToResponse(Resource resource) {

        ResourceResponse response = new ResourceResponse();

        response.setId(resource.getId());
        response.setTitle(resource.getTitle());
        response.setSubject(resource.getSubject());
        response.setResourceType(resource.getResourceType());
        response.setUrl(resource.getUrl());
        response.setDescription(resource.getDescription());

        return response;
    }
}