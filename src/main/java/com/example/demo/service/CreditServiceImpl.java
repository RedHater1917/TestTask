package com.example.demo.service;

import com.example.demo.entity.Credit;
import com.example.demo.repository.CreditRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class CreditServiceImpl implements CreditService {
    @Autowired
    private CreditRepository creditRepository;
    @Override
    public Optional<Credit> get(UUID id) {
        return this.creditRepository.findById(id);
    }

    @Override
    public Iterable<Credit> getAll() {
        return this.creditRepository.findAll();
    }

    @Override
    public Credit save(Credit credit) {
        return this.creditRepository.save(credit);
    }

    @Override
    public void update(Credit credit) {
        this.creditRepository.update(credit.getId(),credit.getCreditLimit(),credit.getCreditPercent());
    }

    @Override
    public void delete(Credit credit) {
        this.creditRepository.delete(credit);
    }
}
