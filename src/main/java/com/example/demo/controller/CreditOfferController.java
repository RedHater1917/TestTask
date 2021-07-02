package com.example.demo.controller;

import com.example.demo.entity.Client;
import com.example.demo.entity.CreditOffer;
import com.example.demo.service.CreditOfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("api/creditOffer")
public class CreditOfferController {
    @Autowired
    private CreditOfferService service;
    @GetMapping("/{id}")
    public Optional<CreditOffer> getAll(@PathVariable UUID id) {
        return service.get(id);
    }
    @GetMapping("/")
    public Iterable<CreditOffer> getAll() {
        return service.getAll();
    }
    @PostMapping("/delete")
    public void delete(@RequestBody CreditOffer creditOffer) {
        service.delete(creditOffer);
    }
    @PostMapping("/save")
    public CreditOffer save(@RequestBody CreditOffer creditOffer) {
        return service.save(creditOffer);
    }
}
