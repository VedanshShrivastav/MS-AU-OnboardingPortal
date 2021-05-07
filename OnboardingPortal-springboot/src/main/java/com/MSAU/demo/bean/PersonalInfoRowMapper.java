package com.MSAU.demo.bean;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PersonalInfoRowMapper implements RowMapper {
    @Override
    public Object mapRow(ResultSet resultSet, int i) throws SQLException {
        PersonalInfo user=new PersonalInfo();

        user.setoid(resultSet.getInt("oid"));
        user.setFname(resultSet.getString("fname"));
        user.setLname(resultSet.getString("lname"));
        user.setDob(resultSet.getString("DOB"));
        user.setContact(resultSet.getString("Contact"));
        user.setEmail(resultSet.getString("Email"));

        return user;
    }
}