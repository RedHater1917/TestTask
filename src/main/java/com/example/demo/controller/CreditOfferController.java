package com.example.demo.controller;

import com.example.demo.entity.Client;
import com.example.demo.entity.CreditOffer;
import com.example.demo.entity.PaymentSchedule;
import com.example.demo.entity.PaymentScheduleSettings;
import com.example.demo.service.CreditOfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/creditOffer")
public class CreditOfferController {
    @Autowired
    private CreditOfferService service;
    @GetMapping("/{id}")
    public CreditOffer getAll(@PathVariable UUID id) {
        return service.get(id);
    }
    @GetMapping("/")
    public Iterable<CreditOffer> getAll() {
        return service.getAll();
    }
    @PostMapping("/delete")
    public void delete(@RequestBody CreditOffer creditOffer) {
        service.delete(creditOffer);
    }
    @PostMapping("/save")
    public CreditOffer save(@RequestBody CreditOffer creditOffer) {
        return service.save(creditOffer);
    }
    @PostMapping("/calculatePaymentSchedule")
    public List<PaymentSchedule> calculatePaymentSchedule(@RequestBody PaymentScheduleSettings settings) {
        return service.calculatePaymentSchedule(settings);
    }
    @GetMapping("/paymentSchedule/{offerId}")
    public List<PaymentSchedule> getPaymentScheduleByOffer(@PathVariable UUID offerId) {
        return service.getPaymentScheduleByOffer(offerId);
    }

}
