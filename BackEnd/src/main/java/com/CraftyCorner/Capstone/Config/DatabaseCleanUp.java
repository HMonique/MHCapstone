package com.CraftyCorner.Capstone.Config;

import jakarta.annotation.PreDestroy;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.Statement;

@Configuration
public class DatabaseCleanUp {

    @Autowired
    private DataSource dataSource;

    @Bean
    public DatabaseCleanup databaseCleanup() {
        return new DatabaseCleanup(dataSource);
    }

    public static class DatabaseCleanup {

        private final DataSource dataSource;
        private final Logger logger = org.slf4j.LoggerFactory.getLogger(DatabaseCleanup.class);

        public DatabaseCleanup(DataSource dataSource) {
            this.dataSource = dataSource;
        }

        @PreDestroy
        public void dropDatabaseTables() {

            try (Connection connection = dataSource.getConnection()) {
                Statement statement = connection.createStatement();


                statement.execute("DROP TABLE product");
                statement.execute("DROP TABLE learning");
                statement.execute("DROP TABLE roles_users");
                statement.execute("DROP TABLE roles");
                statement.execute("DROP TABLE user");
                statement.execute("DROP TABLE supplies");


                logger.info("Tables dropped");
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}