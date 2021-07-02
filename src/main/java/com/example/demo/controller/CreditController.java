package com.example.demo.controller;

import com.example.demo.entity.Client;
import com.example.demo.entity.Credit;
import com.example.demo.service.CreditService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("api/credit")
public class CreditController {
    @Autowired
    private CreditService service;

    @GetMapping("/{id}")
    public Optional<Credit> getAll(@PathVariable UUID id) {
        return service.get(id);
    }
    @GetMapping("/")
    public Iterable<Credit> getAll() {
        return service.getAll();
    }
    @PostMapping("/delete")
    public void delete(@RequestBody Credit credit) {
        service.delete(credit);
    }
    @PostMapping("/save")
    public Credit save(@RequestBody Credit credit) {
        return service.save(credit);
    }
}
