package com.MSAU.demo.repository;
import com.MSAU.demo.bean.Vacancies;
import com.MSAU.demo.bean.VacanciesRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class VacanciesRepo {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Vacancies> getVacancies() {
        return jdbcTemplate.query("select * from Vacancies", new VacanciesRowMapper());
    }

    public Vacancies findByID(Integer ID) {

        String sql = "SELECT * FROM Vacancies WHERE ID = ?";
        try {
            return (Vacancies) this.jdbcTemplate.queryForObject(
                    sql, new Object[]{ID}, new VacanciesRowMapper());
        } catch (EmptyResultDataAccessException ex) {
            return null;
        }
    }



}