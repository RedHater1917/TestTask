package com.example.demo.controller;

import com.example.demo.entity.Client;
import com.example.demo.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("api/client")
public class ClientController {

    @Autowired
    private ClientService service;

    @GetMapping("/{id}")
    public Optional<Client> getAll(@PathVariable UUID id) {
        return service.get(id);
    }
    @GetMapping("/")
    public Iterable<Client> getAll() {
        return service.getAll();
    }
    @GetMapping("/newBankClients/{bankId}")
    public Iterable<Client> getNewBankClients(@PathVariable UUID bankId) {
        return service.getNewBankClients(bankId);
    }
    @PostMapping("/delete")
    public void delete(@RequestBody Client client) {
        service.delete(client);
    }
    @PostMapping("/save")
    public Client save(@RequestBody Client client) {
        return service.save(client);
    }

}
