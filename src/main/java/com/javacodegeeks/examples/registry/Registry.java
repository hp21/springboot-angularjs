package com.javacodegeeks.examples.registry;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

import com.javacodegeeks.examples.controller.Car;

/**
 * Created by u292148 on 2016.09.30..
 */
public class Registry {

    private static final String DATABASE = "DATABASE";
    private static final AtomicLong NEXT_ID = new AtomicLong(101);

    private static Map<String, Object> map = new ConcurrentHashMap();
    private static Map<Long, Car> DB = new ConcurrentHashMap();

    static {
        map.put(DATABASE, DB);

        Car car = new Car();
        car.setYear(1222);
        car.setName("XXX");
        addCar(car);

        car = new Car();
        car.setYear(2222);
        car.setName("ZZZZ");
        addCar(car);

        car = new Car();
        car.setYear(2012);
        car.setName("WV");
        addCar(car);


    }


    public static Car addCar(Car car) {
        car.setId(nextId());
        DB.put(car.getId(), car);
        return DB.get(car.getId());
    }


    public static List<Car> cars() {
        return new ArrayList<Car>(DB.values());
    }

    public static long nextId() {
        return NEXT_ID.incrementAndGet();
    }

    public static List<Long> nextId(int range) {
        List<Long> result = new ArrayList<Long>();

        for (int i = 0; i < range; i++) {
            result.add(NEXT_ID.incrementAndGet());
        }

        return result;
    }
}
