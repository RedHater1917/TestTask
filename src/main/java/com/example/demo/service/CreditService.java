package com.example.demo.service;


import com.example.demo.entity.Credit;

import java.util.Optional;
import java.util.UUID;

public interface CreditService {
    Optional<Credit> get(UUID id);
    Iterable<Credit> getAll();
    Credit save(Credit credit);
    void update(Credit credit);
    void delete(Credit credit);
}
