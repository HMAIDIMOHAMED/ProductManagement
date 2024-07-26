package com.example.apptest.Controller;

import com.example.apptest.Model.Message;
import com.example.apptest.Repository.MessageRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;


import java.util.List;

@RestController
@RequestMapping("/message")
public class MessageController {

  private final MessageRepository messageRepository;

  public MessageController(MessageRepository messageRepository) {
    this.messageRepository = messageRepository;
  }

  @PostMapping("/add")
  public ResponseEntity<Message> addMessage(@Valid @RequestBody Message message) {
    Message savedMessage = messageRepository.save(message);
    return ResponseEntity.ok(savedMessage);
  }

  @GetMapping
  public List<Message> getAllMessages() {
    return messageRepository.findAll();
  }
}
