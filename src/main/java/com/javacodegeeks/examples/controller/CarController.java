package com.javacodegeeks.examples.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest")
public class CarController {

    @RequestMapping(value = "/cars", method = RequestMethod.GET)
    public List<Car> homepage() {

        List<Car> result = new ArrayList<Car>();
        Car car = new Car();
        car.setId(12L);
        car.setName("QWE");
        car.setYear(1234);
        result.add(car);

        car = new Car();
        car.setId(122L);
        car.setName("AQWE");
        car.setYear(2222);
        result.add(car);

        return result;
    }
}
