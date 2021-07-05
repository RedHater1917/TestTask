package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.UUID;

@Getter
@Setter
@Entity
public class PaymentSchedule{
    @Id
    @GeneratedValue
    private UUID id;
    private LocalDate paymentDate;
    private Double paymentSum;
    private Double creditBodySum;
    private Double creditPercentSum;
    @ManyToOne(fetch = FetchType.EAGER)
    private CreditOffer offer;
}
