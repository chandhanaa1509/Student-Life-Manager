// Purpose:
// DTO used when updating the user's profile.

package com.studentlifemanager.dto.profile;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ProfileRequest {

    @NotBlank(message = "Name is required")
    private String name;
}