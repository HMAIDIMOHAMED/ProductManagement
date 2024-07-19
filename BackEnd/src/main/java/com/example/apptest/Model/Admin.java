package com.example.apptest.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="admins")
@Data
public class Admin {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false, unique = true, length = 45)
  private String username;

  @Column(nullable = false, length = 64)
  private String password;

  // Getters and setters
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  // Constructors
  public Admin() {
  }

  public Admin(String username, String password) {
    this.username = username;
    this.password = password;
  }
}
