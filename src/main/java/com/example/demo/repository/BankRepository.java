package com.example.demo.repository;

import com.example.demo.entity.Bank;
import com.example.demo.entity.Client;
import com.example.demo.entity.Credit;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Set;
import java.util.UUID;

@Repository
public interface BankRepository extends CrudRepository<Bank, UUID> {
    @Transactional
    @Modifying
    @Query("UPDATE Bank b set b.clientList = :clientList, b.creditList = :creditList" +
            "where b.id = :id")
    void update(@Param("id") UUID id, @Param("clientList") Set<Client> clientList,
                @Param("creditList") Set<Credit> creditList);
}
