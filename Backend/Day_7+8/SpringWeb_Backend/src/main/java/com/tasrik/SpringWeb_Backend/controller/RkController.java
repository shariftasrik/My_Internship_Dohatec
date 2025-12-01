package com.tasrik.SpringWeb_Backend.controller;

import com.tasrik.SpringWeb_Backend.model.Product;
import com.tasrik.SpringWeb_Backend.model.RK;
import com.tasrik.SpringWeb_Backend.service.ProductService;
import com.tasrik.SpringWeb_Backend.service.RkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class RkController {
    @Autowired
    private RkService service;

    @GetMapping("/rk")
    public List<RK> getEverything(){
        return service.getEverything();

    }
}
