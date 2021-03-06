package com.example.demo.service;

import com.example.demo.entity.Bank;
import com.example.demo.repository.BankRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class BankServiceImpl implements BankService{
    @Autowired
    private BankRepository bankRepository;
    @Override
    public Bank get(UUID id) {
        return bankRepository.findById(id).get();
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
    public void delete(Bank bank) {
        bankRepository.delete(bank);
    }
}
