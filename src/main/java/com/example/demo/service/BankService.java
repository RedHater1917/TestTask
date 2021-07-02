package com.example.demo.service;

import com.example.demo.entity.Bank;
import com.example.demo.entity.Client;

import java.util.Optional;
import java.util.UUID;

public interface BankService {
    Optional<Bank> get(UUID id);
    Iterable<Bank> getAll();
    Bank save(Bank bank);
    void delete(Bank bank);
}
