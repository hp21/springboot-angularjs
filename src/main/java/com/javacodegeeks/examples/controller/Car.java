package com.javacodegeeks.examples.controller;

/**
 * Created by u292148 on 2016.09.29..
 */
public class Car {
    private Long id;
    private String name;
    private int year;

    public Car() {
    }

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public int getYear() {
        return year;
    }

    public void setYear(final int year) {
        this.year = year;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Car{");
        sb.append("id=").append(id);
        sb.append(", name='").append(name).append('\'');
        sb.append(", year=").append(year);
        sb.append('}');
        return sb.toString();
    }
}
