package com.CraftyCorner.Capstone;


import com.CraftyCorner.Capstone.Common.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
public class UserTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    public void testUser() {
        userRepository.findByUsername("test");

    }
}