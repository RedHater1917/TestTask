package com.example.demo.controller;

import com.example.demo.entity.Bank;
import com.example.demo.entity.Client;
import com.example.demo.service.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("api/bank")
public class BankController {
    @Autowired
    private BankService service;

    @GetMapping("/{id}")
    public Optional<Bank> getAll(@PathVariable UUID id) {
        return service.get(id);
    }
    @GetMapping("/")
    public Iterable<Bank> getAll() {
        return service.getAll();
    }
    @PostMapping("/delete")
    public void delete(@RequestBody Bank bank) {
        service.delete(bank);
    }
    @PostMapping("/save")
    public Bank save(@RequestBody Bank bank) {
        return service.save(bank);
    }
}
