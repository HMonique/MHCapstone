package com.CraftyCorner.Capstone.Common;


import com.CraftyCorner.Capstone.Model.Supplies;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SuppliesRepository extends JpaRepository<Supplies, Integer> {
    List<Supplies> findByName(String name);

}