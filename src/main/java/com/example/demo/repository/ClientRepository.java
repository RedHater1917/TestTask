package com.example.demo.repository;

import com.example.demo.entity.Client;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;
@Repository
public interface ClientRepository extends CrudRepository<Client, UUID> {
}
