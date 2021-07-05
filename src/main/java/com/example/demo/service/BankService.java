package com.example.demo.service;

import com.example.demo.entity.Bank;

import java.util.UUID;

public interface BankService {
    Bank get(UUID id);
    Iterable<Bank> getAll();
    Bank save(Bank bank);
    void delete(Bank bank);
}
