package com.example.apptest.Model;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Table(name = "Payment")
@Data
public class Payment {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(nullable = false,unique = true,length =45)
  private String cardNumber;
  @Column(nullable = false,unique = true,length =45)
  private String cardHolder;
  @Column(nullable = false,length =64)
  private String expMonth;
  @Column(nullable = false,length = 64)
  private String expYear;
  @Column(nullable = false,length = 64)
  private String cvv;
}
