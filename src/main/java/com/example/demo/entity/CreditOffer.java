package com.example.demo.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
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
    private Double creditSum;
    @OneToMany(mappedBy="offer", fetch = FetchType.EAGER)
    private Set<PaymentSchedule> paymentSchedule;
}
