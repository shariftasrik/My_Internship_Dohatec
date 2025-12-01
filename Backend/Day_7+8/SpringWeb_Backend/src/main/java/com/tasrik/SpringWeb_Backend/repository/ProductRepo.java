package com.tasrik.SpringWeb_Backend.repository;

import com.tasrik.SpringWeb_Backend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepo extends JpaRepository<Product, Integer> {
    @Query("""
            SELECT p.name FROM Product as p""")
    List<String> test();

    @Query("""
            SELECT p FROM Product as p""")
    List<Product> test2();
}
