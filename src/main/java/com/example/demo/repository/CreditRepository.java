package com.example.demo.repository;

import com.example.demo.entity.Credit;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.UUID;

@Repository
public interface CreditRepository extends CrudRepository<Credit, UUID> {
    @Transactional
    @Modifying
    @Query("UPDATE Credit c set c.creditLimit = :creditLimit, c.creditPercent = :creditPercent "
            +"where c.id = :id")
    void update(@Param("id") UUID id, @Param("creditLimit") Integer creditLimit,
                @Param("creditPercent") Short creditPercent);
}
