package com.tasrik.refresh_token.controller;


import com.tasrik.refresh_token.dto.RegisterRequest;
import com.tasrik.refresh_token.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegisterRequest request){
        // Save the new user to the database and the return success response
        authService.registerUser(request);
        return ResponseEntity.ok("User registered successfully");
    }
}
