package com.MSAU.demo.repository;
import com.MSAU.demo.bean.Manager;
import com.MSAU.demo.bean.ManagerRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ManagerRepo {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Manager> getManager() {
        return jdbcTemplate.query("select * from Manager", new ManagerRowMapper());
    }

    public Manager findByID(Integer ID) {

        String sql = "SELECT * FROM Manager WHERE ID = ?";
        try {
            return (Manager) this.jdbcTemplate.queryForObject(
                    sql, new Object[]{ID}, new ManagerRowMapper());
        } catch (EmptyResultDataAccessException ex) {
            return null;
        }

    }

}