package com.example.demo.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Getter
@Setter
@Table(name = "client")
public class Client {
    @Id
    @GeneratedValue
    private UUID id;
    private String fio;
    @Column(unique = true)
    private String telephoneNumber;
    @Column(unique = true)
    private String email;
    @Column(unique = true)
    private String passportNumber;
}
