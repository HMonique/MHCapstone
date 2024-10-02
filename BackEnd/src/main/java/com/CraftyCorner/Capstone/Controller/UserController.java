package com.CraftyCorner.Capstone.Controller;


import com.CraftyCorner.Capstone.Common.UserRepository;
import com.CraftyCorner.Capstone.Model.MyAppUser;
//import com.CraftyCorner.Capstone.Model.RegisterRequest;
//import com.CraftyCorner.Capstone.Model.LoginRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    public ResponseEntity<List<MyAppUser>> getAllUsers() {
        List<MyAppUser> users = userRepository.findAll();
        return ResponseEntity.ok(users);
    }
//    @PostMapping("/login") // Define the mapping for login
//    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
//        MyAppUser user = userRepository.findByUsername(loginRequest.getUsername());
//
//        if (user != null && user.getPassword().equals(loginRequest.getPassword())) {
//            return ResponseEntity.ok("Login successful");
//        } else {
//            return ResponseEntity.status(401).body("Invalid username or password");
//        }
//    }
//
//    @PostMapping("/register") // Define the mapping for registration
//    public ResponseEntity<String> register(@RequestBody RegisterRequest registerRequest) {
//        // Check if the username already exists
//        if (userRepository.findByUsername(registerRequest.getUsername()) != null) {
//            return ResponseEntity.status(400).body("Username already exists");
//        }
//
//        // Create a new user
//        MyAppUser newUser = new MyAppUser();
//        newUser.setUsername(registerRequest.getUsername());
//        newUser.setPassword(registerRequest.getPassword()); // Hash the password in a real application
//        newUser.setEmail(registerRequest.getEmail());
//
//        // Save the new user to the database
//        userRepository.save(newUser);
//
//        return ResponseEntity.status(201).body("User registered successfully");
//    }
}
