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
}