package com.CraftyCorner.Capstone.Common;


import com.CraftyCorner.Capstone.Model.MyLearning;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MyLearningRepository extends JpaRepository<MyLearning, Integer> {
    List<MyLearning> findByName(String name);

}
