package com.MSAU.demo.controller;


import com.MSAU.demo.bean.Onboarding;
import com.MSAU.demo.bean.Trends1;
import com.MSAU.demo.repository.OnboardingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/Onboarding")

public class OnboardingController {

    @Autowired
    OnboardingRepo OnboardingRepo;

    @GetMapping()
    public List<Onboarding> getAllOnboarding()
    {
        return OnboardingRepo.getOnboarding();
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getOnboarding(@PathVariable("id") Integer id) {
        Onboarding Onboarding1 = OnboardingRepo.findByoid(id);
        if (Onboarding1 == null) {
            return new ResponseEntity<String>("No Onboarding found with this "+ id, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Onboarding>(Onboarding1, HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<String> createOnboarding(@RequestBody Onboarding Onboarding) throws SQLIntegrityConstraintViolationException {
        if (OnboardingRepo.findByoid(Onboarding.getoid()) != null) {
            return new ResponseEntity<String>("Duplicate Entry "+ Onboarding.getoid(), HttpStatus.IM_USED);
        }
        OnboardingRepo.saveOnboarding(Onboarding);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
    @PutMapping
    public ResponseEntity<?> updateOnboarding(@RequestBody Onboarding Onboarding1) {
        if (OnboardingRepo.findByoid(Onboarding1.getoid()) == null) {
            return new ResponseEntity<String>("Unable to update as  Onboarding id " + Onboarding1.getoid() + " not found.",
                    HttpStatus.NOT_FOUND);
        }

        OnboardingRepo.updateOnboarding(Onboarding1);
        return new ResponseEntity<Onboarding>(Onboarding1, HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> deleteOnboarding(@PathVariable("id") Integer id) {
        Onboarding Onboarding =OnboardingRepo.findByoid(id);
        if (Onboarding == null) {
            return new ResponseEntity<String>("Unable to delete as  Onboarding id " + id + " not found.", HttpStatus.NOT_FOUND);
        }
        OnboardingRepo.deleteOnboardingByoid(id);
        return new ResponseEntity<Onboarding>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/trends1")
    public List<Trends1>getcountPerLocation(){
        return OnboardingRepo.getcountPerLocation();
    }

}