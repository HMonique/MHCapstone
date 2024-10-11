package com.CraftyCorner.Capstone.Controller;
import com.CraftyCorner.Capstone.Common.MyLearningRepository;
import com.CraftyCorner.Capstone.Model.MyLearning;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/CraftyCorner")
public class MyLearningController {

    private final MyLearningRepository myLearningRepository;

    public MyLearningController(MyLearningRepository myLearningRepository) {
        this.myLearningRepository = myLearningRepository;
    }

    @GetMapping("/mylearning")
    public ResponseEntity<List<MyLearning>> myLearning() {
        List<MyLearning> myLearning = myLearningRepository.findAll();
        return ResponseEntity.ok(myLearning);
    }
    @PostMapping("/mylearning")
    public ResponseEntity<MyLearning> createMyLearning(@RequestBody MyLearning myLearning) {
        MyLearning newMyLearning = myLearningRepository.save(myLearning);
        return ResponseEntity.ok(newMyLearning);
    }
    @DeleteMapping("/mylearning/{id}")
    public ResponseEntity<Void> deleteMyLearning(@PathVariable Integer id) {
        myLearningRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}

