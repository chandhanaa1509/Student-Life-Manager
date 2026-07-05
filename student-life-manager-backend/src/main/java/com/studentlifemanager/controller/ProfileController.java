// Purpose:
// Exposes APIs for viewing and updating the user's profile.

package com.studentlifemanager.controller;

import com.studentlifemanager.dto.profile.ProfileRequest;
import com.studentlifemanager.dto.profile.ProfileResponse;
import com.studentlifemanager.service.ProfileService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {

    private final ProfileService profileService;

    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }

    @GetMapping
    public ProfileResponse getProfile() {
        return profileService.getProfile();
    }

    @PutMapping
    public ProfileResponse updateProfile(
            @Valid @RequestBody ProfileRequest request) {

        return profileService.updateProfile(request);
    }
}