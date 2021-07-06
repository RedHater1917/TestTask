package com.example.demo.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Getter
@Setter
@Table(name = "credit")
public class Credit {
    @Id
    @GeneratedValue
    private UUID id;
    private Long creditLimit;
    private Float creditPercent;

}
