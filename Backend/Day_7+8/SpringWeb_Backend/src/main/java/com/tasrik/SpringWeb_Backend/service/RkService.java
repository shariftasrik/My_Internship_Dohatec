package com.tasrik.SpringWeb_Backend.service;

import com.tasrik.SpringWeb_Backend.model.RK;
import com.tasrik.SpringWeb_Backend.repository.RkRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RkService {

    @Autowired
    private RkRepo repo;

    public List<RK> getEverything(){
        return repo.test();
    }
}
