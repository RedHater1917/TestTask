package com.example.demo.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.UUID;

@Getter
@Setter
@Entity
public class PaymentSchedule {
    @Id
    @GeneratedValue
    private UUID id;
    private LocalDate paymentDate;
    private Long paymentSum;
    private Long creditBodySum;
    private Long creditPercentSum;
    @ManyToOne
    @JoinColumn(name="offer_id", nullable=false)
    private CreditOffer offer;
}
