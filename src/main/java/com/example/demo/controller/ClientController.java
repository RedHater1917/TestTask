package com.example.demo.controller;

import com.example.demo.entity.Client;
import com.example.demo.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
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
    @GetMapping("/delete")
    public String delete(@RequestBody Client client) {
        service.delete(client);
        return "Deleted successfully";
    }
    @PostMapping("/save")
    public Client save(@RequestBody Client client) {
        return service.save(client);
    }
    @PostMapping("/update")
    public String update(@RequestBody Client client) {
        service.update(client);
        return "Updated successfully";
    }

}
