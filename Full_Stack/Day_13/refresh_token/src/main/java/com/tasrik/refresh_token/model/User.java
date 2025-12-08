package com.tasrik.refresh_token.model;


import jakarta.persistence.*;
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

    @Column(name = "full_name", nullable= false)
    private String fullName;

    @Column(nullable = false, unique = true)
    private String username;

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
