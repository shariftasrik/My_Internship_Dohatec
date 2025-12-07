package com.tasrik.refresh_token.model;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "app_user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long Id;


    @NotBlank(message = "Full name is required")
    @Column(name = "full_name", nullable= false)
    @Size(min = 3, max = 50, message="Full name must be between 3 and 50 characters")
    private String fullName;


    @NotBlank(message = "Username is required")
    @Size(min = 5, max = 30, message = "username must be between 5 and 30 characters")
    @Column(nullable = false, unique = true)
    private String username;


    @NotBlank(message = "Password is required")
    @Size(min = 6, message = "Password must be at least 3 characters")
    @Column(nullable = false )
    private String password;


    @Enumerated(EnumType.STRING)
    private Role role;

    public User(String fullName, String username, String password, Role role) {
        this.fullName = fullName;
        this.username = username;
        this.password = password;
        this.role = role;
    }
}
