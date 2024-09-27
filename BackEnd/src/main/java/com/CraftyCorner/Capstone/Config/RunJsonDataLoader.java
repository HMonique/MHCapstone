package com.CraftyCorner.Capstone.Config;

import com.CraftyCorner.Capstone.Common.*;
import com.CraftyCorner.Capstone.Model.MyAppUser;
import com.CraftyCorner.Capstone.Model.MyLearning;
import com.CraftyCorner.Capstone.Model.Product;
import com.CraftyCorner.Capstone.Model.Roles;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Configuration
public class RunJsonDataLoader implements CommandLineRunner {

    private final Logger logger = LoggerFactory.getLogger(RunJsonDataLoader.class);
    private final UserRepository userRepository;
    private final ProductRepository productRepository;
    private final RolesRepository rolesRepository;
    private final MyLearningRepository mylearningRepository;
    private final ObjectMapper objectMapper;

    public RunJsonDataLoader(UserRepository userRepository, ProductRepository productRepository, RolesRepository rolesRepository, MyLearningRepository mylearningRepository, ObjectMapper objectMapper) {
        this.userRepository = userRepository;
        this.productRepository = productRepository;
        this.rolesRepository = rolesRepository;
        this.mylearningRepository = mylearningRepository;
        this.objectMapper = objectMapper;
    }

    @Override
    public void run(String... args) throws Exception {
        loadRolesData();
        loadUserData();
        loadProductData();
        loadMyLearningData();
    }

    private void loadUserData() {
        if (userRepository.count() == 0) {
            try (InputStream inputStream = getClass().getResourceAsStream("/data/User.json")) {
                List<MyAppUser> users = objectMapper.readValue(inputStream, new TypeReference<List<MyAppUser>>() {});
                logger.info("User data loaded: {}", users);
                userRepository.saveAll(users);
            } catch (IOException e) {
                throw new RuntimeException("Failed to load user data", e);
            }
        }
    }

    private void loadProductData() {
        if (productRepository.count() == 0) {
            try (InputStream inputStream = getClass().getResourceAsStream("/data/Products.json")) {
                List<Product> products = objectMapper.readValue(inputStream, new TypeReference<List<Product>>() {});
                logger.info("Product data loaded: {}", products);
                System.out.println("these are the products " + products);
                productRepository.saveAll(products);
            } catch (IOException e) {
                throw new RuntimeException("Failed to load product data", e);
            }
        }
    }

    private void loadRolesData() {
        if (rolesRepository.count() == 0) {
            try (InputStream inputStream = getClass().getResourceAsStream("/data/Roles.json")) {
                List<Roles> roles = objectMapper.readValue(inputStream, new TypeReference<List<Roles>>() {});
                logger.info("Roles data loaded: {}", roles);
                rolesRepository.saveAll(roles);
            } catch (IOException e) {
                throw new RuntimeException("Failed to load roles data", e);
            }
        }
    }

    private void loadMyLearningData() {
        if (mylearningRepository.count() == 0) {
            try (InputStream inputStream = getClass().getResourceAsStream("/data/MyLearning.json")) {
                List<MyLearning> mylearning = objectMapper.readValue(inputStream, new TypeReference<List<MyLearning>>() {});
                logger.info("MyLearning data loaded: {}", mylearning);
                mylearningRepository.saveAll(mylearning);
            } catch (IOException e) {
                throw new RuntimeException("Failed to load MyLearning data", e);
            }

        }
    }
}

