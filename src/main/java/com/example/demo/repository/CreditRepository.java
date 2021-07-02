package com.example.demo.repository;

import com.example.demo.entity.Client;
import com.example.demo.entity.Credit;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface CreditRepository extends CrudRepository<Credit, UUID> {
    @Query(nativeQuery = true,
            value = "SELECT * FROM PUBLIC.CREDIT c where c.ID NOT IN" +
                    "(SELECT b.CREDIT_LIST_ID FROM PUBLIC.BANK_CREDIT_LIST b where b.BANK_ID = :bankId)")
    Iterable<Client> getNewBankClients(@Param("bankId") UUID bankId);
}
