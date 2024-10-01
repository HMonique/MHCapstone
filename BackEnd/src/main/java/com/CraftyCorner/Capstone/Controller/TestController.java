package com.CraftyCorner.Capstone.Controller;


import com.CraftyCorner.Capstone.Common.ProductRepository;
import com.CraftyCorner.Capstone.Model.Product;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;



@RestController
public class TestController {

    private final ProductRepository productRepository;

    public TestController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


    @GetMapping("/test")
    public ResponseEntity<List<Product>> test() {
        List<Product> products = productRepository.findAll();
        return ResponseEntity.ok(products);
    }
}
