package com.example.demo.service;


import com.example.demo.entity.Credit;

import java.util.UUID;

public interface CreditService {
    Credit get(UUID id);
    Iterable<Credit> getAll();
    Credit save(Credit credit);
    void delete(Credit credit);
    Iterable<Credit> getNewBankCredits(UUID bankId);
}
