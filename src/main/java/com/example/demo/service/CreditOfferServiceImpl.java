package com.example.demo.service;

import com.example.demo.entity.CreditOffer;
import com.example.demo.entity.PaymentScheduleSettings;
import com.example.demo.entity.PaymentSchedule;
import com.example.demo.repository.CreditOfferRepository;
import com.example.demo.repository.PaymentScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
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
            schedule.setOffer(creditOffer);
            schedule = paymentScheduleRepository.save(schedule);
        }
        creditOffer.setPaymentSchedule(scheduleList);
        return creditOfferRepository.save(creditOffer);

    }

    @Override
    public void delete(CreditOffer creditOffer) {
        this.creditOfferRepository.delete(creditOffer);
    }

    /**С этим методом есть одна проблема - точность ~97-99%
     * Чем больше процентная ставка , тем ниже точность, я думаю, что в некоторых случаях и до 95% может дойти
     * Даже с учетом использования BigDecimal(С Double было чуть похуже)
     * С ануитетным счетом он накидывает эту разницу в тело кредита
     * С дифференциальным он её накидывает в проценты кредита
     * Проблема именно в расчёте переменной sum, но других формул, которые бы давали
     * настолько же точный результат я не нашёл
     * */
    @Override
    public List<PaymentSchedule> calculatePaymentSchedule(PaymentScheduleSettings settings) {
        var resultList = new ArrayList<PaymentSchedule>();
        BigDecimal percents = BigDecimal.valueOf(settings.getCredit().getCreditPercent()).divide(BigDecimal.valueOf(100*settings.getNumOfMonths()),6,RoundingMode.HALF_UP);
        BigDecimal sum;
        if(settings.isDifferential()){
            sum = settings.getCreditSum().divide(BigDecimal.valueOf(settings.getNumOfMonths()),6, RoundingMode.HALF_UP);
        }else{
            sum = (settings.getCreditSum().multiply(
                    (percents.add(percents.divide(percents.add(BigDecimal.valueOf(1))
                            .pow(settings.getNumOfMonths()).subtract(BigDecimal.valueOf(1)),6, RoundingMode.HALF_UP)))));
        }
        for(int i = 0;i<settings.getNumOfMonths();i++){
            var schedule = new PaymentSchedule();
            schedule.setPaymentDate(LocalDate.now().plusMonths(i));
            schedule.setCreditPercentSum(settings.getCreditSum().multiply(percents).setScale(2,RoundingMode.HALF_UP));
            if(settings.isDifferential()){
                schedule.setCreditBodySum(sum.setScale(2,RoundingMode.HALF_UP));
                schedule.setPaymentSum(schedule.getCreditBodySum().add(schedule.getCreditPercentSum()).setScale(2,RoundingMode.HALF_UP));
            }else{
                schedule.setPaymentSum(sum.setScale(2,RoundingMode.HALF_UP));
                schedule.setCreditBodySum(sum.subtract(schedule.getCreditPercentSum()).setScale(2,RoundingMode.HALF_UP));
            }
            settings.setCreditSum((settings.getCreditSum().subtract(sum).compareTo(BigDecimal.ZERO)) > 0 ? settings.getCreditSum().subtract(sum):BigDecimal.ZERO);//Иногда, при кол-ве месяцев>8-10 получается так, что проценты кредита уходят в минус
            resultList.add(schedule);
        }
        return resultList;
    }

}
