// AdminController.java

package com.example.apptest.Controller;

import com.example.apptest.Model.Admin;
import com.example.apptest.Model.User;
import com.example.apptest.Repository.AdminRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
@CrossOrigin("http://localhost:4200")
public class AdminController {

  private final AdminRepository adminRepository;

  public AdminController(AdminRepository adminRepository) {
    this.adminRepository = adminRepository;
  }

  @PostMapping("/login")
  public ResponseEntity<Admin> loginUser(@RequestBody Admin userData) {
    try {
      Admin admin = adminRepository.findByUsername(userData.getUsername());

      if (admin != null && admin.getPassword().equals(userData.getPassword())) {
        return ResponseEntity.ok(admin);
      } else {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
      }
    } catch (Exception e) {
      e.printStackTrace();
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }
}
