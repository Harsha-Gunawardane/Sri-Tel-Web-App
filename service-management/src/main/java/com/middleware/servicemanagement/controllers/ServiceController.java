package com.middleware.servicemanagement.controllers;

import com.middleware.servicemanagement.dto.PaymentDto;
import com.middleware.servicemanagement.models.ServiceModel;
import com.middleware.servicemanagement.services.ServiceHandlingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/service")
public class ServiceController {
    @Autowired
    ServiceHandlingService handlingService;

    @GetMapping
    public ResponseEntity<Map> getAllServicesRelatedToUser(){

        return handlingService.getAllServicesRelatedToUser(5);
    }

    @PostMapping
    public ResponseEntity<String> addService(@RequestBody ServiceModel serviceModel){
        return handlingService.addService(serviceModel);
    }

    @PostMapping("/activate")
    public ResponseEntity<String> activateService(@RequestBody PaymentDto payment) {
        return handlingService.activateService(payment);
    }

}
