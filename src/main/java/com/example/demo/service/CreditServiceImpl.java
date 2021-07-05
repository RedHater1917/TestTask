package com.example.demo.service;

import com.example.demo.entity.Credit;
import com.example.demo.repository.CreditRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class CreditServiceImpl implements CreditService {
    @Autowired
    private CreditRepository creditRepository;

    @Override
    public Credit get(UUID id) {
        return creditRepository.findById(id).get();
    }

    @Override
    public Iterable<Credit> getAll() {
        return creditRepository.findAll();
    }

    @Override
    public Credit save(Credit credit) {
        return creditRepository.save(credit);
    }

    @Override
    public void delete(Credit credit) {
        creditRepository.delete(credit);
    }

    @Override
    public Iterable<Credit> getNewBankCredits(UUID bankId) {
        return creditRepository.getNewBankCredits(bankId);
    }
}
