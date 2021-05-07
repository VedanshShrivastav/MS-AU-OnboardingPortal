package com.MSAU.demo.repository;


import com.MSAU.demo.bean.Onboarding;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@SpringBootTest
public class TestOnboardingRepo {
    @Autowired
    OnboardingRepo userRespository = new OnboardingRepo();

    @Test
    @Order(1)
    public void TestgetOnboarding() {
        assertEquals(2, userRespository.getOnboarding().size());
    }

    @Test
    @Order(2)
    public void TestfindById() {
        assertEquals(103    , userRespository.findByoid(103).getoid());
    }

    @Test
    @Order(3)
    public void TestsaveOnboarding() {
        Onboarding user = new Onboarding();
        user.setoid(109);
        user.setBCG("true");
        user.setStatus("true");
        user.setGraduation("true");
        user.setLocation("Hyderabad");
        user.setManager(4);
        user.setStartDate("2021-05-09");
        user.setPosition("SDE");
        userRespository.saveOnboarding(user);
        assertNotNull(userRespository.findByoid(109).getoid());

    }

    @Test
    @Order(4)
    public void TestupdateOnboarding() {
        Onboarding user = new Onboarding();
        user.setoid(109);
        user.setBCG("true");
        user.setStatus("true");
        user.setGraduation("true");
        user.setLocation("Hyderabad");
        user.setManager(4);
        user.setStartDate("2021-05-09");
        user.setPosition("SDE");
        userRespository.updateOnboarding(user);
        assertNotNull(userRespository.findByoid(109).getoid());
    }


    @Test
    @Order(5)
    public void TestdeleteOnboardingById() {
        Integer onboardId = 109;
        assertEquals(1, userRespository.deleteOnboardingByoid(onboardId));
    }
}