package com.CraftyCorner.Capstone.Controller;

import com.CraftyCorner.Capstone.Common.SuppliesRepository;
import com.CraftyCorner.Capstone.Model.Supplies;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/CraftyCorner")
public class SuppliesController {

    private final SuppliesRepository suppliesRepository;

    public SuppliesController(SuppliesRepository suppliesRepository) {
        this.suppliesRepository = suppliesRepository;
    }

    @GetMapping("/supplies")
    public ResponseEntity<List<Supplies>> getAllSupplies() {
        List<Supplies> supplies = suppliesRepository.findAll();
        return ResponseEntity.ok(supplies);
    }

    @GetMapping("/supplies/{id}")
    public ResponseEntity<Supplies> getProductById(@PathVariable Integer id) {
        Supplies supplies = suppliesRepository.findById(id).orElse(null);
        return ResponseEntity.ok(supplies);
    }

    @PostMapping("/supplies/create")
    public ResponseEntity<Supplies> createSupplies(@RequestBody Supplies supplies) {
        Supplies newSupplies = suppliesRepository.save(supplies);
        return ResponseEntity.ok(newSupplies);
    }
    @PostMapping("/supplies/update")
    public ResponseEntity<Supplies> updateSupplies(@RequestBody Supplies supplies) {
        Supplies newSupplies = suppliesRepository.save(supplies);
        return ResponseEntity.ok(newSupplies);
    }
    @DeleteMapping("/supplies/{id}")
    public ResponseEntity<Supplies> deleteSupplies(@PathVariable Integer id) {
        suppliesRepository.deleteById(id);
        return ResponseEntity.ok(null);
    }
}