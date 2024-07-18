package com.example.apptest.Model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="Product")
@Data
public class Product {
    @Id
    @Column(nullable = false,unique = false,length =45)
    String name ;
    @Column(nullable = false,unique = false,length =45)
    String description ;
    @Column(nullable = false,unique = false,length =45)
    String price;
    @Column(nullable = false,unique = false,length =45)
    String quantity;




}
