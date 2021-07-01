package com.example.demo.service;

import com.example.demo.entity.CreditOffer;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class CreditOfferServiceImpl implements CreditOfferService {
    @Override
    public Optional<CreditOffer> get(UUID id) {
        return Optional.empty();
    }

    @Override
    public Iterable<CreditOffer> getAll() {
        return null;
    }

    @Override
    public CreditOffer save(CreditOffer creditOffer) {
        return null;
    }

    @Override
    public void update(CreditOffer creditOffer) {

    }

    @Override
    public void delete(CreditOffer creditOffer) {

    }
}
