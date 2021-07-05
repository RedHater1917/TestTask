package com.example.demo.service;

import com.example.demo.entity.Client;

import java.util.UUID;

public interface ClientService {
    Client get(UUID id);
    Iterable<Client> getAll();
    Client save(Client client);
    void delete(Client client);
    Iterable<Client> getNewBankClients(UUID bankId);
}
