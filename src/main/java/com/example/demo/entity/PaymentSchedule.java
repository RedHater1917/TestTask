package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "payment_schedule")
public class PaymentSchedule{
    @Id
    @GeneratedValue
    private UUID id;
    private LocalDate paymentDate;
    private BigDecimal paymentSum;
    private BigDecimal creditBodySum;
    private BigDecimal creditPercentSum;
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference
    private CreditOffer offer;
}
