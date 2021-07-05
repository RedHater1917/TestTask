package com.example.demo.repository;

import com.example.demo.entity.PaymentSchedule;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface PaymentScheduleRepository extends CrudRepository<PaymentSchedule, UUID> {

    @Query("SELECT * FROM PaymentSchedule p where p.offer.id = :offerId")
    List<PaymentSchedule> getPaymentScheduleByOffer(@Param("offerId") UUID offerId);
}
