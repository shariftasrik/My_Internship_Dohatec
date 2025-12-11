package com.tasrik.refresh_token.repository;

import com.tasrik.refresh_token.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
