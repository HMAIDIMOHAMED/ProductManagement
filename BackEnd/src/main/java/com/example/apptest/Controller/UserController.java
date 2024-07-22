package com.example.apptest.Controller;

import com.example.apptest.Model.User;
import com.example.apptest.Repository.UserRepository;
import com.example.apptest.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin("http://localhost:4200")
public class UserController {

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private UserService userService;

  @PostMapping("/login")
  public ResponseEntity<User> loginUser(@RequestBody User userData) {
    try {
      User user = userRepository.findByEmail(userData.getEmail());

      if (user != null && user.getPassword().equals(userData.getPassword())) {
        return ResponseEntity.ok(user);
      } else {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
      }
    } catch (Exception e) {
      e.printStackTrace();
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }


  @PostMapping("/register")
  public ResponseEntity<User> registerUser(@RequestBody User newUser) {
    try {
      User existingUser = userRepository.findByEmail(newUser.getEmail());
      if (existingUser != null) {
        return ResponseEntity.status(HttpStatus.CONFLICT).build();
      }

      User savedUser = userRepository.save(newUser);

      return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    } catch (Exception e) {
      e.printStackTrace();
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

  @GetMapping
  public ResponseEntity<List<User>> getAllUsers() {
    List<User> users = userService.getAllUsers();
    return new ResponseEntity<>(users, HttpStatus.OK);
  }

  @GetMapping("/{id}")
  public ResponseEntity<User> getUserById(@PathVariable("id") Long id) {
    User user = userService.getUserById(id);
    if (user != null) {
      return new ResponseEntity<>(user, HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @GetMapping("/email/{email}")
  public ResponseEntity<User> getUserByEmail(@PathVariable("email") String email) {
    User user = userService.getUserByEmail(email);
    if (user != null) {
      return new ResponseEntity<>(user, HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }
  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteUser(@PathVariable("id") Long id) {
    userService.deleteUser(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
  @PutMapping("/{id}")
  public ResponseEntity<User> updateUser(@PathVariable("id") Long id, @RequestBody User user) {
    User updatedUser = userService.updateUser(id, user);
    if (updatedUser != null) {
      return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

}
