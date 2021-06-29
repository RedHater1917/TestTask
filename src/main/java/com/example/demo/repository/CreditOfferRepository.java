package com.example.demo.repository;

import com.example.demo.entity.CreditOffer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CreditOfferRepository extends CrudRepository<CreditOffer, UUID> {
}
