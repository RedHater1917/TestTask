package com.example.demo.repository;

import com.example.demo.entity.CreditOffer;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.UUID;

@Repository
public interface CreditOfferRepository extends CrudRepository<CreditOffer, UUID> {
    @Transactional
    @Modifying
    @Query("UPDATE CreditOffer c set c.client = :client, c.credit = :credit, c.creditSum = :creditSum"
            +"where c.id = :id")
    void update(@Param("id") UUID id, @Param("client") Integer creditLimit,
                @Param("credit") Short creditPercent, @Param("creditSum") Long creditSum);
}
