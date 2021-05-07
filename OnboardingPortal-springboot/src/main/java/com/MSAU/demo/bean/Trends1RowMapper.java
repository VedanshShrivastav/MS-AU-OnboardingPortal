package com.MSAU.demo.bean;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class Trends1RowMapper implements RowMapper {
    @Override
    public Object mapRow(ResultSet resultSet, int i) throws SQLException {
        Trends1 user=new Trends1();

        user.setoid(resultSet.getInt("oid"));
        user.setLocation(resultSet.getString("Location"));

        return user;
    }
}