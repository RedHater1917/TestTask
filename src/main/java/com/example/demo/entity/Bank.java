package com.example.demo.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;
import java.util.UUID;

@Entity
@Getter
@Setter
@Table(name = "bank")
public class Bank {
    @Id
    @GeneratedValue
    private UUID id;
    @ManyToMany
    private Set<Client> clientList;
    @ManyToMany
    private Set<Credit> creditList;
}
