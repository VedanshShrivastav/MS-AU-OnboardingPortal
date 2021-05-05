package com.MSAU.demo.controller;

import com.MSAU.demo.bean.PersonalInfo;
import com.MSAU.demo.repository.PersonalInfoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/PersonalInfo")

public class PersonalInfoController {

    @Autowired
    PersonalInfoRepo personalInfoRepo;

    @GetMapping()
    public List<PersonalInfo> getAllPersonalInfo()
    {
        return personalInfoRepo.getPersonalInfo();
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getPersonalInfo(@PathVariable("id") Integer id) {
        PersonalInfo personalInfo1 = personalInfoRepo.findByoid(id);
        if (personalInfo1 == null) {
            return new ResponseEntity<String>("No PersonalInfo found with this "+ id, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<PersonalInfo>(personalInfo1, HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<String> createPersonalInfo(@RequestBody PersonalInfo personalInfo) throws SQLIntegrityConstraintViolationException {
        if (personalInfoRepo.findByoid(personalInfo.getoid()) != null) {
            return new ResponseEntity<String>("Duplicate Entry "+ personalInfo.getoid(), HttpStatus.IM_USED);
        }
        personalInfoRepo.savePersonalInfo(personalInfo);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
    @PutMapping
    public ResponseEntity<?> updatePersonalInfo(@RequestBody PersonalInfo personalInfo1) {
        if (personalInfoRepo.findByoid(personalInfo1.getoid()) == null) {
            return new ResponseEntity<String>("Unable to update as  PersonalInfo id " + personalInfo1.getoid() + " not found.",
                    HttpStatus.NOT_FOUND);
        }

        personalInfoRepo.updatePersonalInfo(personalInfo1);
        return new ResponseEntity<PersonalInfo>(personalInfo1, HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> deletePersonalInfo(@PathVariable("id") Integer id) {
        PersonalInfo PersonalInfo =personalInfoRepo.findByoid(id);
        if (PersonalInfo == null) {
            return new ResponseEntity<String>("Unable to delete as  PersonalInfo id " + id + " not found.", HttpStatus.NOT_FOUND);
        }
        personalInfoRepo.deletePersonalInfoByoid(id);
        return new ResponseEntity<PersonalInfo>(HttpStatus.NO_CONTENT);
    }


}