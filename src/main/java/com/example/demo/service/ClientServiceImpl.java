package com.example.demo.service;

import com.example.demo.entity.Client;
import com.example.demo.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ClientServiceImpl implements ClientService {
    @Autowired
    private ClientRepository clientRepository;

    @Override
    public Client get(UUID id) {
        return clientRepository.findById(id).get();
    }

    @Override
    public Iterable<Client> getAll() {
        return clientRepository.findAll();
    }

    @Override
    public Client save(Client client) {
        return clientRepository.save(client);
    }


    @Override
    public void delete(Client client) {
        clientRepository.delete(client);
    }

    @Override
    public Iterable<Client> getNewBankClients(UUID bankId) {
        return this.clientRepository.getNewBankClients(bankId);
    }
}
