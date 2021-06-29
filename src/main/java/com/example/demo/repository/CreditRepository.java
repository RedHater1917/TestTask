package com.example.demo.repository;

import com.example.demo.entity.Credit;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CreditRepository extends CrudRepository<Credit, UUID> {
}
