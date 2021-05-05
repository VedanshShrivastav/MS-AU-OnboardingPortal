package com.MSAU.demo.repository;


import com.MSAU.demo.bean.PersonalInfo;
import com.MSAU.demo.bean.PersonalInfoRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCallback;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;
import java.util.List;

@Repository
public class PersonalInfoRepo {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<PersonalInfo> getPersonalInfo(){
        return  jdbcTemplate.query("select * from PersonalInfo",new PersonalInfoRowMapper());
    }

    public PersonalInfo findByoid(Integer oid){

        String sql = "SELECT * FROM PersonalInfo WHERE oid = ?";
        try{
            return  (PersonalInfo) this.jdbcTemplate.queryForObject(
                    sql, new Object[] { oid }, new PersonalInfoRowMapper());
        }
        catch(EmptyResultDataAccessException ex){
            return null;
        }

    }

    public Boolean savePersonalInfo(PersonalInfo PersonalInfo){
        String query="INSERT INTO `PersonalInfo` (`fname`, `lname`, `DOB`, `Contact`, `Email`) VALUES  (?,?,?,?,?)";

        return jdbcTemplate.execute(query,new PreparedStatementCallback<Boolean>(){
            @Override
            public Boolean doInPreparedStatement(PreparedStatement ps)
                    throws SQLException, DataAccessException {

                ps.setString(1,PersonalInfo.getFname());
                ps.setString(2,PersonalInfo.getLname());
                ps.setString(3,PersonalInfo.getDob());
                ps.setString(4,PersonalInfo.getContact());
                ps.setString(5,PersonalInfo.getEmail());

                return ps.execute();

            }
        });

    }

    public Integer updatePersonalInfo(PersonalInfo PersonalInfo){

        String query="update PersonalInfo set fname = ? , lname = ? , DOB = ? , Contact = ? , Email = ? where OID = ?";
        Object[] params = {PersonalInfo.getFname(), PersonalInfo.getLname(),PersonalInfo.getDob(),PersonalInfo.getContact(),PersonalInfo.getEmail(),PersonalInfo.getoid()};
        int[] types = {Types.VARCHAR, Types.VARCHAR,Types.VARCHAR,Types.VARCHAR,Types.VARCHAR,Types.VARCHAR,Types.INTEGER};

        return jdbcTemplate.update(query, params, types);
    }

    public Integer deletePersonalInfoByoid(Integer oid){
        return jdbcTemplate.update("delete from PersonalInfo where oid = ?",oid);
    }
}