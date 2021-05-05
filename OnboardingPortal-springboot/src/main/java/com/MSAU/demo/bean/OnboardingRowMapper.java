package com.MSAU.demo.bean;


import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;
import java.sql.ResultSet;
import java.sql.SQLException;

public class OnboardingRowMapper implements RowMapper {
    @Override
    public Object mapRow(ResultSet resultSet, int i) throws SQLException {
        Onboarding user=new Onboarding();

        user.setoid(resultSet.getInt("oid"));
        user.setBCG(resultSet.getString("BCG"));
        user.setGraduation(resultSet.getString("Graduation"));
        user.setStatus(resultSet.getString("Status"));
        user.setLocation(resultSet.getString("Location"));
        user.setStartDate(resultSet.getString("StartDate"));
        user.setManager(resultSet.getInt("Manager"));

        return user;
    }
}