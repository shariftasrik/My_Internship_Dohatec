package com.tasrik.refresh_token.service;


import com.tasrik.refresh_token.dto.RegisterRequest;
import com.tasrik.refresh_token.model.User;
import com.tasrik.refresh_token.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    @Transactional
    public void registerUser(RegisterRequest registerRequest){
        // check if user with the same username already exist
        if(userRepository.existsByUserName(registerRequest.getUsername())){
            throw new IllegalArgumentException("Username is already in use");
        };

        // Create new user
        User user = User
                .builder()
                .fullName(registerRequest.getFullName())
                .username(registerRequest.getUsername())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .role(registerRequest.getRole())
                .build();


        userRepository.save(user);
    }

}
