package com.example.demo.controller;

import com.example.demo.entity.Bank;
import com.example.demo.entity.Client;
import com.example.demo.service.BankService;
import org.springframework.beans.factory.annotation.Autowired;
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
    @GetMapping("/delete")
    public String delete(@RequestBody Bank bank) {
        service.delete(bank);
        return "Deleted successfully";
    }
    @PostMapping("/save")
    public Bank save(@RequestBody Bank bank) {
        return service.save(bank);
    }
    @PostMapping("/update")
    public String update(@RequestBody Bank bank) {
        service.update(bank);
        return "Updated successfully";
    }
}
