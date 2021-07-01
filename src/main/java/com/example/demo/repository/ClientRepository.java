package com.example.demo.repository;

import com.example.demo.entity.Client;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.UUID;
@Repository
public interface ClientRepository extends CrudRepository<Client, UUID> {
    @Transactional
    @Modifying
    @Query("UPDATE Client c set c.fio = :fio, c.email = :email, c.passportNumber = :passportNumber " +
            "where c.id = :id")
    void update(@Param("id") UUID id, @Param("fio") String fio, @Param("email") String email,
                @Param("passportNumber") Integer passportNumber);
}
