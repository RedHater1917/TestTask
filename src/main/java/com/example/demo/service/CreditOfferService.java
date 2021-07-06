package com.example.demo.service;


import com.example.demo.entity.CreditOffer;
import com.example.demo.entity.PaymentScheduleSettings;
import com.example.demo.entity.PaymentSchedule;

import java.util.List;
import java.util.UUID;

public interface CreditOfferService {
    CreditOffer get(UUID id);
    Iterable<CreditOffer> getAll();
    CreditOffer save(CreditOffer creditOffer);
    void delete(CreditOffer creditOffer);
    List<PaymentSchedule> calculatePaymentSchedule(PaymentScheduleSettings settings);
}
