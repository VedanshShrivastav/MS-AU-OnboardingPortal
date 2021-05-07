package com.MSAU.demo.bean;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ManagerRowMapper implements RowMapper {
    @Override
    public Object mapRow(ResultSet resultSet, int i) throws SQLException {
        Manager user=new Manager();

        user.setID(resultSet.getInt("ID"));
        user.setName(resultSet.getString("name"));

        return user;
    }
}