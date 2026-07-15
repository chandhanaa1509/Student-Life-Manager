// Purpose:
// Contains business logic for viewing and updating the user profile.

package com.studentlifemanager.service;

import com.studentlifemanager.dto.profile.ProfileRequest;
import com.studentlifemanager.dto.profile.ProfileResponse;
import com.studentlifemanager.model.User;
import com.studentlifemanager.repository.UserRepository;
import com.studentlifemanager.security.SecurityUtil;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {

    private final UserRepository userRepository;
    private final SecurityUtil securityUtil;

    public ProfileService(
            UserRepository userRepository,
            SecurityUtil securityUtil) {

        this.userRepository = userRepository;
        this.securityUtil = securityUtil;
    }

    public ProfileResponse getProfile() {

        User user = securityUtil.getCurrentUser();

        return mapToResponse(user);
    }

    public ProfileResponse updateProfile(ProfileRequest request) {

        User user = securityUtil.getCurrentUser();

        user.setName(request.getName());

        User updated = userRepository.save(user);

        return mapToResponse(updated);
    }

    private ProfileResponse mapToResponse(User user) {

        ProfileResponse response = new ProfileResponse();

        response.setId(user.getId());
        response.setName(user.getName());
        response.setEmail(user.getEmail());
        response.setRole(user.getRole());

        return response;
    }
}