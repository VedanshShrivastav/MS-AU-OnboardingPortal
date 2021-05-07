package com.MSAU.demo.bean;

public class Onboarding {
    private int oid;
    private String BCG;
    private String Graduation;
    private String Status;
    private String Location;
    private String StartDate;
    private int Manager;

    public String getGraduation() {
        return Graduation;
    }

    public void setGraduation(String graduation) {
        Graduation = graduation;
    }

    public int getoid() {
        return oid;
    }

    public void setoid(int oid) {
        this.oid = oid;
    }

    public String getBCG() {
        return BCG;
    }

    public void setBCG(String BCG) {
        this.BCG = BCG;
    }

    public String getStatus() {
        return Status;
    }

    public void setStatus(String status) {
        Status = status;
    }

    public String getLocation() {
        return Location;
    }

    public void setLocation(String location) {
        Location = location;
    }

    public String getStartDate() {
        return StartDate;
    }

    public void setStartDate(String startDate) {
        StartDate = startDate;
    }

    public int getManager() {
        return Manager;
    }

    public void setManager(int Manager) {
        this.Manager = Manager;
    }
}
