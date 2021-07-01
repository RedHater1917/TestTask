package com.example.demo.service;

import com.example.demo.entity.Bank;
import com.example.demo.entity.Client;
import com.example.demo.repository.BankRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class BankServiceImpl implements BankService{
    @Autowired
    private BankRepository bankRepository;
    @Override
    public Optional<Bank> get(UUID id) {
        return this.bankRepository.findById(id);
    }

    @Override
    public Iterable<Bank> getAll() {
        return this.bankRepository.findAll();
    }

    @Override
    public Bank save(Bank bank) {
        return this.bankRepository.save(bank);
    }

    @Override
    public void update(Bank bank) {
        this.bankRepository.update(bank.getId(),bank.getClientList(),bank.getCreditList());
    }

    @Override
    public void delete(Bank bank) {
        this.bankRepository.delete(bank);
    }
}
