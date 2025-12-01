package com.tasrik.SpringWeb_Backend.controller;

import com.tasrik.SpringWeb_Backend.model.Product;
import com.tasrik.SpringWeb_Backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ProductController {
    @Autowired
    private ProductService service;

    @RequestMapping("/")
    public String greet(){
        return "Hello World";
    }


    @GetMapping("/products")
    public List<String> getAllProducts(){
        return service.getAllProducts();
    }
    @GetMapping("/products2")
    public List<Product> getAllProducts2(){
        return service.getAllProducts2();
    }
}
