package com.MSAU.demo.repository;

import com.MSAU.demo.bean.Onboarding;
import com.MSAU.demo.bean.OnboardingRowMapper;
import com.MSAU.demo.bean.Trends1;
import com.MSAU.demo.bean.Trends1RowMapper;
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
public class OnboardingRepo {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Onboarding> getOnboarding(){
        return  jdbcTemplate.query("select * from Onboarding",new OnboardingRowMapper());
    }
    public List<Trends1> getcountPerLocation(){
        return jdbcTemplate.query("select Location,Count(OID) as OID from Onboarding group by Location",new Trends1RowMapper());

    }
    public Onboarding findByoid(Integer oid){

        String sql = "SELECT * FROM Onboarding WHERE oid = ?";
        try{
            return  (Onboarding) this.jdbcTemplate.queryForObject(
                    sql, new Object[] { oid }, new OnboardingRowMapper());
        }
        catch(EmptyResultDataAccessException ex){
            return null;
        }

    }


    public Boolean saveOnboarding(Onboarding Onboarding){
        String query="insert into Onboarding values(?,?,?,?,?,?,?,?)";
        return jdbcTemplate.execute(query,new PreparedStatementCallback<Boolean>(){
            @Override
            public Boolean doInPreparedStatement(PreparedStatement ps)
                    throws SQLException, DataAccessException {

                ps.setInt(1,Onboarding.getoid());
                ps.setString(2,Onboarding.getBCG());
                ps.setString(3,Onboarding.getGraduation());
                ps.setString(4,Onboarding.getStatus());
                ps.setString(5,Onboarding.getLocation());
                ps.setString(6,Onboarding.getStartDate());
                ps.setInt(7,Onboarding.getManager());
                ps.setString(8,Onboarding.getPosition());
                return ps.execute();

            }
        });
    }

    public Integer updateOnboarding(Onboarding Onboarding){

        String query="update Onboarding set BCG = ? , Graduation = ? , Status = ? , Location = ? , StartDate = ?, Manager = ?, Position=? where oid = ?";
        Object[] params = {Onboarding.getBCG(), Onboarding.getGraduation(),Onboarding.getStatus(),Onboarding.getLocation(),Onboarding.getStartDate(), Onboarding.getManager(),Onboarding.getPosition(),Onboarding.getoid()};
        int[] types = {Types.VARCHAR, Types.VARCHAR,Types.VARCHAR,Types.VARCHAR,Types.VARCHAR,Types.INTEGER,Types.VARCHAR,Types.INTEGER};

        return jdbcTemplate.update(query, params, types);
    }

    public Integer deleteOnboardingByoid(Integer oid){
        return jdbcTemplate.update("delete from Onboarding where oid = ?",oid);
    }


}