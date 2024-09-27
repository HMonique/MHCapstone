package com.CraftyCorner.Capstone.Controller;
import com.CraftyCorner.Capstone.Common.MyLearningRepository;
import com.CraftyCorner.Capstone.Common.RolesRepository;
import com.CraftyCorner.Capstone.Model.MyLearning;
import com.CraftyCorner.Capstone.Model.Roles;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.relation.Role;
import java.util.List;


@RestController
@RequestMapping("/CraftyCorner")
public class RolesController {

    private final RolesRepository rolesRepository;

    public RolesController(RolesRepository rolesRepository) {
        this.rolesRepository = rolesRepository;
    }

    @GetMapping("/roles")
    public ResponseEntity<List<Roles>> roles() {
        List<Roles> roles = rolesRepository.findAll();
        return ResponseEntity.ok(roles);
    }
}