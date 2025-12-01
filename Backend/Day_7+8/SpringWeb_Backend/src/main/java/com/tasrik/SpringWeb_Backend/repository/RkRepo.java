package com.tasrik.SpringWeb_Backend.repository;

import com.tasrik.SpringWeb_Backend.model.Product;
import com.tasrik.SpringWeb_Backend.model.RK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RkRepo extends JpaRepository<RK, Integer> {
        @Query("""
            SELECT p FROM RK as p""")
    List<RK> test();
}
