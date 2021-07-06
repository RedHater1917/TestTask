package com.example.demo.entity;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class PaymentScheduleSettings {
    private Credit credit;
    private BigDecimal creditSum;
    private Integer numOfMonths;
    private boolean differential;//false - аннуитетный, true - дифференцированный
}
