package com.CraftyCorner.Capstone.Common;


import com.CraftyCorner.Capstone.Model.Roles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RolesRepository extends JpaRepository<Roles, Integer> {
    Roles findByRole(String role);


}
