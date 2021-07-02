package com.example.demo.service;

import com.example.demo.entity.CreditOffer;
import com.example.demo.repository.CreditOfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class CreditOfferServiceImpl implements CreditOfferService {
    @Autowired
    private CreditOfferRepository creditOfferRepository;
    @Override
    public Optional<CreditOffer> get(UUID id) {
        return creditOfferRepository.findById(id);
    }

    @Override
    public Iterable<CreditOffer> getAll() {
        return creditOfferRepository.findAll();
    }

    @Override
    public CreditOffer save(CreditOffer creditOffer) {
        return creditOfferRepository.save(creditOffer);
    }

    @Override
    public void delete(CreditOffer creditOffer) {

    }
}
