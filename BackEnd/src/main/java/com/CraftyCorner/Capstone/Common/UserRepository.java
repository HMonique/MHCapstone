package com.CraftyCorner.Capstone.Common;


import com.CraftyCorner.Capstone.Model.MyAppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<MyAppUser, Long> {
    MyAppUser findByUsername(String username);
    MyAppUser findByEmail(String email);


}
