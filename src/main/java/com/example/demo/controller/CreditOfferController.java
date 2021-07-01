package com.example.demo.controller;

import com.example.demo.entity.Client;
import com.example.demo.entity.CreditOffer;
import com.example.demo.service.CreditOfferService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public String delete(@RequestBody CreditOffer creditOffer) {
        service.delete(creditOffer);
        return "Deleted successfully";
    }
    @PostMapping("/save")
    public CreditOffer save(@RequestBody CreditOffer creditOffer) {
        return service.save(creditOffer);
    }
    @PostMapping("/update")
    public String update(@RequestBody CreditOffer creditOffer) {
        service.update(creditOffer);
        return "Updated successfully";
    }
}
