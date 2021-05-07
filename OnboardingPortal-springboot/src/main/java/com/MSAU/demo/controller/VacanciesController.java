package com.MSAU.demo.controller;

import com.MSAU.demo.bean.Vacancies;
import com.MSAU.demo.repository.VacanciesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/Vacancies")

public class VacanciesController {

    @Autowired
    VacanciesRepo VacanciesRepo;

    @GetMapping()
    public List<Vacancies> getAllVacancies()
    {
        return VacanciesRepo.getVacancies();
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getVacancies(@PathVariable("id") Integer id) {
        Vacancies Vacancies1 = VacanciesRepo.findByID(id);
        if (Vacancies1 == null) {
            return new ResponseEntity<String>("No Vacancies found with this "+ id, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Vacancies>(Vacancies1, HttpStatus.OK);
    }


}
