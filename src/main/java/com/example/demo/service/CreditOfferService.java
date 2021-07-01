package com.example.demo.service;


import com.example.demo.entity.CreditOffer;

import java.util.Optional;
import java.util.UUID;

public interface CreditOfferService {
    Optional<CreditOffer> get(UUID id);
    Iterable<CreditOffer> getAll();
    CreditOffer save(CreditOffer creditOffer);
    void update(CreditOffer creditOffer);
    void delete(CreditOffer creditOffer);
}
