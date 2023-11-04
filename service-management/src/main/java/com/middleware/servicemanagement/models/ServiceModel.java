package com.middleware.servicemanagement.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.Getter;

import java.time.Duration;

@Data
@Entity
@Getter
public class ServiceModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
    private String name;
    private Duration validTimeDuration;
    private Double serviceCharge;

    public Integer getServiceId() {
        return id;
    }
}
