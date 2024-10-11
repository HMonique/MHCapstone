package com.CraftyCorner.Capstone;


import com.CraftyCorner.Capstone.Common.SuppliesRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class SuppliesTest {

    @Autowired
    private SuppliesRepository suppliesRepository;

    @Test
    public void testSupplies() {
        suppliesRepository.findByName("test");

    }


}
