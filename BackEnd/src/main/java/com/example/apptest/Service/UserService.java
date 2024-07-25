package com.example.apptest.Service;

import com.example.apptest.Model.User;
import com.example.apptest.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

  @Autowired
  private UserRepository userRepository;

  public List<User> getAllUsers() {
    return userRepository.findAll();
  }

  public User saveUser(User user) {
    return userRepository.save(user);
  }

  public User updateUser(Long id, User user) {
    Optional<User> existingUserOptional = userRepository.findById(id);
    if (existingUserOptional.isPresent()) {
      User existingUser = existingUserOptional.get();
      user.setId(existingUser.getId());
      return userRepository.save(user);
    }
    return null; // Gérer le cas où l'utilisateur n'est pas trouvé
  }


  public void deleteUser(Long id) {
    userRepository.deleteById(id);
  }

  public User getUserById(Long id) {
    return userRepository.findById(id).orElse(null);
  }

  public User getUserByEmail(String email) {
    return userRepository.findByEmail(email);
  }


}
