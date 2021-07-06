package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Set;
import java.util.UUID;

@Entity
@Getter
@Setter
@Table(name = "credit_offer")
public class CreditOffer{
    @Id
    @GeneratedValue
    private UUID id;
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "client_id")
    private Client client;
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "credit_id")
    private Credit credit;
    private BigDecimal creditSum;
    @OneToMany(mappedBy="offer", fetch = FetchType.EAGER)
    @JsonManagedReference
    private Set<PaymentSchedule> paymentSchedule;
}
