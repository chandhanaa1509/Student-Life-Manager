package com.studentlifemanager.service;

import com.studentlifemanager.dto.resource.ResourceRequest;
import com.studentlifemanager.dto.resource.ResourceResponse;
import com.studentlifemanager.model.Resource;
import com.studentlifemanager.model.User;
import com.studentlifemanager.repository.ResourceRepository;
import com.studentlifemanager.security.SecurityUtil;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ResourceService {

    private final ResourceRepository resourceRepository;
    private final SecurityUtil securityUtil;

    public ResourceService(
            ResourceRepository resourceRepository,
            SecurityUtil securityUtil) {

        this.resourceRepository = resourceRepository;
        this.securityUtil = securityUtil;
    }

    public ResourceResponse addResource(
            ResourceRequest request) {

        User currentUser = securityUtil.getCurrentUser();

        Resource resource = new Resource();

        resource.setTitle(request.getTitle());
        resource.setLink(request.getLink());
        resource.setCategory(request.getCategory());
        resource.setUserId(currentUser.getId());

        Resource saved =
                resourceRepository.save(resource);

        return mapToResponse(saved);
    }

    public List<ResourceResponse> getAllResources() {

        User currentUser = securityUtil.getCurrentUser();

        return resourceRepository
                .findByUserId(currentUser.getId())
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    private ResourceResponse mapToResponse(
            Resource resource) {

        ResourceResponse response =
                new ResourceResponse();

        response.setId(resource.getId());
        response.setTitle(resource.getTitle());
        response.setLink(resource.getLink());
        response.setCategory(resource.getCategory());

        return response;
    }

}

