package com.example.apptest.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Table(name = "Message")
@Data
public class Message {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false, length = 45)
  @NotBlank(message = "Name is mandatory")
  private String name;

  @Column(nullable = false, length = 45)
  @NotBlank(message = "Email is mandatory")
  @Email(message = "Email should be valid")
  private String email;

  @Column(nullable = false, length = 255)
  @NotBlank(message = "Message is mandatory")
  private String message;
}
