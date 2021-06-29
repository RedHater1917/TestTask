package com.example.demo.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Getter
@Setter
@Table(name = "credit_offer")
public class CreditOffer {
    @Id
    @GeneratedValue
    private UUID id;
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "client_id")
    private Client client;
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "credit_id")
    private Credit credit;
    private Long creditSum;
    //TODO Спросить про график платежей и добавить его, а также спросить
    // про "Код доступа к данным должен быть изолирован в классах DAO;"
}
