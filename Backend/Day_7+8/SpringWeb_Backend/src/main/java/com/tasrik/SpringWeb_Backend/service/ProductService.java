package com.tasrik.SpringWeb_Backend.service;

import com.tasrik.SpringWeb_Backend.model.Product;
import com.tasrik.SpringWeb_Backend.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepo repo;

    public List<String> getAllProducts() {
        return repo.test();
    }
    public List<Product> getAllProducts2() {
        return repo.test2();
    }
}
