package com.example.demo.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PaymentScheduleSettings {
    private Credit credit;
    private Double creditSum;
    private Integer numOfMonths;
    private boolean annuity;//True - аннуитетный, False - дифференцированный
}
