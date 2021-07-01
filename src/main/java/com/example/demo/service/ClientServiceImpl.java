package com.example.demo.service;

import com.example.demo.entity.Client;
import com.example.demo.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class ClientServiceImpl implements ClientService {
    @Autowired
    private ClientRepository clientRepository;

    @Override
    public Optional<Client> get(UUID id) {
        return this.clientRepository.findById(id);
    }

    @Override
    public Iterable<Client> getAll() {
        return this.clientRepository.findAll();
    }

    @Override
    public Client save(Client client) {
        return this.clientRepository.save(client);
    }

    @Override
    public void update(Client client) {
        this.clientRepository.update(client.getId(),client.getFio(),client.getEmail(),client.getPassportNumber());
    }

    @Override
    public void delete(Client client) {
        this.clientRepository.delete(client);
    }
}
