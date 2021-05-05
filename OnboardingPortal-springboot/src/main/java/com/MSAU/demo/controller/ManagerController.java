package com.MSAU.demo.controller;

import com.MSAU.demo.bean.Manager;
import com.MSAU.demo.repository.ManagerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/Manager")

public class ManagerController {

    @Autowired
    ManagerRepo ManagerRepo;

    @GetMapping()
    public List<Manager> getAllManager()
    {
        return ManagerRepo.getManager();
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getManager(@PathVariable("id") Integer id) {
        Manager Manager1 = ManagerRepo.findByID(id);
        if (Manager1 == null) {
            return new ResponseEntity<String>("No Manager found with this "+ id, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Manager>(Manager1, HttpStatus.OK);
    }

}
