package com.example.demo.repository;

import com.example.demo.entity.Bank;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface BankRepository extends CrudRepository<Bank, UUID> {
}
