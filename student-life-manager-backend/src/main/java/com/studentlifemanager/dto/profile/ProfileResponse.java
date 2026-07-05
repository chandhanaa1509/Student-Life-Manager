// Purpose:
// DTO returned when viewing the user's profile.

package com.studentlifemanager.dto.profile;

import lombok.Data;

@Data
public class ProfileResponse {

    private String id;

    private String name;

    private String email;

    private String role;
}