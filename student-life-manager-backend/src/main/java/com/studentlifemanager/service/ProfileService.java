// Purpose:
// Contains business logic for viewing and updating the user profile.

package com.studentlifemanager.service;

import com.studentlifemanager.dto.profile.ProfileRequest;
import com.studentlifemanager.dto.profile.ProfileResponse;
import com.studentlifemanager.model.User;
import com.studentlifemanager.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {

    private final UserRepository userRepository;

    public ProfileService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Temporary user
    private final String DEMO_EMAIL = "chandhana3@example.com";

    public ProfileResponse getProfile() {

        User user = userRepository.findByEmail(DEMO_EMAIL)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return mapToResponse(user);
    }

    public ProfileResponse updateProfile(ProfileRequest request) {

        User user = userRepository.findByEmail(DEMO_EMAIL)
                .orElseThrow(() -> new RuntimeException("User not found"));

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