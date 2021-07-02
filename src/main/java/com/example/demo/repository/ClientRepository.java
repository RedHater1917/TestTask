package com.example.demo.repository;

import com.example.demo.entity.Client;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.UUID;
@Repository
public interface ClientRepository extends CrudRepository<Client, UUID> {
    @Query(nativeQuery = true,
            value = "SELECT * FROM PUBLIC.CLIENT c where c.ID NOT IN" +
                    "(SELECT b.CLIENT_LIST_ID FROM PUBLIC.BANK_CLIENT_LIST b where b.BANK_ID = :bankId)")
    Iterable<Client> getNewBankClients(@Param("bankId") UUID bankId);
}
