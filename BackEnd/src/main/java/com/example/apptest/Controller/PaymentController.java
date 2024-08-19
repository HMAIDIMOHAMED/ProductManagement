package com.example.apptest.Controller;

import com.example.apptest.Model.Payment;
import com.example.apptest.Repository.PaymentRepository;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/payment")
public class PaymentController {

  private final PaymentRepository paymentRepository;

  public PaymentController(PaymentRepository paymentRepository) {
    this.paymentRepository = paymentRepository;
  }

  @PostMapping("/add")
  public ResponseEntity<Payment> addPayment(@Valid @RequestBody Payment payment) {
    Payment savedPayment = paymentRepository.save(payment);
    return ResponseEntity.ok(savedPayment);
  }

  @GetMapping
  public List<Payment> getAllPayments() {
    return paymentRepository.findAll();
  }
}
