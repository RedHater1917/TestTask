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
        return bankRepository.findById(id);
    }

    @Override
    public Iterable<Bank> getAll() {
        return bankRepository.findAll();
    }

    @Override
    public Bank save(Bank bank) {
        return bankRepository.save(bank);
    }

    @Override
    public void update(Bank bank) {
        bankRepository.update(bank.getId(),bank.getClientList(),bank.getCreditList());
    }

    @Override
    public void delete(Bank bank) {
        bankRepository.delete(bank);
    }
}
