package com.studentlifemanager.service;

import com.studentlifemanager.model.Resource;
import com.studentlifemanager.model.User;
import com.studentlifemanager.repository.ResourceRepository;
import com.studentlifemanager.security.SecurityUtil;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public Resource addResource(Resource resource) {

        User currentUser = securityUtil.getCurrentUser();

        resource.setUserId(currentUser.getId());

        return resourceRepository.save(resource);
    }

    public List<Resource> getAllResources() {

        User currentUser = securityUtil.getCurrentUser();

        return resourceRepository.findByUserId(currentUser.getId());
    }

}