package com.studentlifemanager.service;

import com.studentlifemanager.dto.AuthResponse;
import com.studentlifemanager.dto.LoginRequest;
import com.studentlifemanager.dto.RegisterRequest;
import com.studentlifemanager.model.User;
import com.studentlifemanager.repository.UserRepository;
import com.studentlifemanager.security.JwtService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(UserRepository userRepository,
                       PasswordEncoder passwordEncoder,
                       JwtService jwtService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    // Register User
    public AuthResponse register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            return new AuthResponse(
                    false,
                    "Email already registered",
                    null
            );
        }

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());

        // Encrypt password before saving
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        // Default values
        user.setRole("USER");
        user.setCreatedAt(LocalDateTime.now());

        userRepository.save(user);

        return new AuthResponse(
                true,
                "User registered successfully",
                null
        );
    }

    // Login User
    public AuthResponse login(LoginRequest request) {

        Optional<User> userOptional =
                userRepository.findByEmail(request.getEmail());

        if (userOptional.isEmpty()) {
            return new AuthResponse(
                    false,
                    "Invalid email or password",
                    null
            );
        }

        User user = userOptional.get();

        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword())) {

            return new AuthResponse(
                    false,
                    "Invalid email or password",
                    null
            );
        }

        // Generate JWT Token
        String token = jwtService.generateToken(user.getEmail());

        return new AuthResponse(
                true,
                "Login successful",
                token
        );
    }
}