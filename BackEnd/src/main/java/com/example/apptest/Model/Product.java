package com.example.apptest.Model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "Product")
@Data
public class Product {

  @Id
  @Column(nullable = false, unique = false, length = 45)
  private String name;

  @Column(nullable = false, length = 45)
  private String n_inventaire;

  @Column(nullable = false, length = 45)
  private String affection;

  @Column(name = "date_achat", nullable = false, length = 45)
  private String date_achat;

  @Column(name = "ref_bc_march", nullable = false, length = 45)
  private String ref_bc_march;}
