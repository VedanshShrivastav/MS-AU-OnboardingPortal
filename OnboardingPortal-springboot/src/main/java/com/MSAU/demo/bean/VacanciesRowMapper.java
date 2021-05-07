package com.MSAU.demo.bean;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class VacanciesRowMapper implements RowMapper {
    @Override
    public Object mapRow(ResultSet resultSet, int i) throws SQLException {
        Vacancies user=new Vacancies();

        user.setId(resultSet.getInt("ID"));
        user.setPosition(resultSet.getString("Position"));
        user.setLocation(resultSet.getString("Location"));

        return user;
    }
}