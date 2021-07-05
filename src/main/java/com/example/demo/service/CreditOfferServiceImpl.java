package com.example.demo.service;

import com.example.demo.entity.CreditOffer;
import com.example.demo.entity.PaymentScheduleSettings;
import com.example.demo.entity.PaymentSchedule;
import com.example.demo.repository.CreditOfferRepository;
import com.example.demo.repository.PaymentScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.time.LocalDate;
import java.util.*;

@Service
public class CreditOfferServiceImpl implements CreditOfferService {
    @Autowired
    private CreditOfferRepository creditOfferRepository;
    @Autowired
    private PaymentScheduleRepository paymentScheduleRepository;

    @Override
    public CreditOffer get(UUID id) {
        return creditOfferRepository.findById(id).get();
    }

    @Override
    public Iterable<CreditOffer> getAll() {
        return creditOfferRepository.findAll();
    }

    @Override
    public CreditOffer save(CreditOffer creditOffer) {
        var scheduleList = creditOffer.getPaymentSchedule();
        creditOffer.setPaymentSchedule(null);
        creditOffer = creditOfferRepository.save(creditOffer);
        for(PaymentSchedule schedule:scheduleList){
            schedule = paymentScheduleRepository.save(schedule);
        }
        creditOffer.setPaymentSchedule(scheduleList);
        return creditOfferRepository.save(creditOffer);

    }

    @Override
    public void delete(CreditOffer creditOffer) {
        this.creditOfferRepository.delete(creditOffer);
    }

    @Override
    public List<PaymentSchedule> calculatePaymentSchedule(PaymentScheduleSettings settings) {
        var resultList = new ArrayList<PaymentSchedule>();
        var percents = Double.valueOf(settings.getCredit().getCreditPercent()) / 100.0 / settings.getNumOfMonths();
        var sum = 0.0;
        if(settings.isAnnuity()){
            sum = toTwoNumbersAfterPoint(settings.getCreditSum()/settings.getNumOfMonths());
        }else{
            sum = toTwoNumbersAfterPoint((settings.getCreditSum()*
                    (percents+(percents/(Math.pow((1+percents),settings.getNumOfMonths())-1)))));

        }
        for(int i = 0;i<settings.getNumOfMonths();i++){
            var schedule = new PaymentSchedule();
            schedule.setPaymentDate(LocalDate.now().plusMonths(i));
            schedule.setCreditPercentSum(toTwoNumbersAfterPoint(settings.getCreditSum()*percents));
            if(settings.isAnnuity()){
                schedule.setCreditBodySum(sum);
                schedule.setPaymentSum(toTwoNumbersAfterPoint(schedule.getCreditBodySum()+schedule.getCreditPercentSum()));
            }else{
                schedule.setCreditBodySum(toTwoNumbersAfterPoint(sum-schedule.getCreditPercentSum()));
                schedule.setPaymentSum(toTwoNumbersAfterPoint(sum));
              }
            settings.setCreditSum(settings.getCreditSum()-sum);
            resultList.add(schedule);
        }
        return resultList;
    }

    @Override
    public List<PaymentSchedule> getPaymentScheduleByOffer(UUID offerId) {
        return paymentScheduleRepository.getPaymentScheduleByOffer(offerId);
    }

    private Double toTwoNumbersAfterPoint(Double number){
        var format = new DecimalFormat("##.00");
        return Double.parseDouble(format.format(number).replace(",","."));
    }

}
