package com.CraftyCorner.Capstone.Controller;


import com.CraftyCorner.Capstone.Common.UserRepository;
import com.CraftyCorner.Capstone.Model.MyAppUser;
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
    @PostMapping
    public ResponseEntity<MyAppUser> createUser(@RequestBody MyAppUser user) {
        MyAppUser newUser = userRepository.save(user);
        return ResponseEntity.ok(newUser);
    }
    @PutMapping
    public ResponseEntity<MyAppUser> updateUser(@RequestBody MyAppUser user) {
        MyAppUser newUser = userRepository.save(user);
        return ResponseEntity.ok(newUser);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<MyAppUser> deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
        return ResponseEntity.ok(null);
    }
}