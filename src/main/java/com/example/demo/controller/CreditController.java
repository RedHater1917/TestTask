package com.example.demo.controller;

import com.example.demo.entity.Client;
import com.example.demo.entity.Credit;
import com.example.demo.service.CreditService;
import org.springframework.beans.factory.annotation.Autowired;
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
    @GetMapping("/delete")
    public String delete(@RequestBody Credit credit) {
        service.delete(credit);
        return "Deleted successfully";
    }
    @PostMapping("/save")
    public Credit save(@RequestBody Credit credit) {
        return service.save(credit);
    }
    @PostMapping("/update")
    public String update(@RequestBody Credit credit) {
        service.update(credit);
        return "Updated successfully";
    }
}
