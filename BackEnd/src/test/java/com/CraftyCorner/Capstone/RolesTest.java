package com.CraftyCorner.Capstone;

import com.CraftyCorner.Capstone.Common.RolesRepository;
import com.CraftyCorner.Capstone.Model.Roles;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class RolesTest {


    @Autowired
    private RolesRepository rolesRepository;
    
    @Test
    public void testRoles() {
        rolesRepository.findByRole("test");
    }

    @ParameterizedTest
    @ValueSource(strings = {"admin", "user"})
    public void testFindByRole(String role) {
        Roles foundRole = rolesRepository.findByRole(role);
        assertNotNull(foundRole, "Role should not be null");
    }
}