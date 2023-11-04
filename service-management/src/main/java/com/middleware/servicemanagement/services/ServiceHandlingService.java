package com.middleware.servicemanagement.services;

import com.middleware.servicemanagement.models.ServiceModel;
import com.middleware.servicemanagement.models.ServiceWrapper;
import com.middleware.servicemanagement.repositories.ServiceRepository;
import com.middleware.servicemanagement.repositories.UserActivatedServicesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ServiceHandlingService {

    @Autowired
    ServiceRepository serviceRepository;
    @Autowired
    UserActivatedServicesRepository userActivatedServicesRepository;

    public ResponseEntity<String> addService(ServiceModel serviceModel) {
        try {
            serviceRepository.save(serviceModel);
            return ResponseEntity.ok("Success");
        } catch (Exception exception) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<Map> getAllServicesRelatedToUser(Integer userId) {
        try {
            List<ServiceModel> services = serviceRepository.findAll();
            List<Integer> userActivatedServices =
                    userActivatedServicesRepository.findAllServicesByUserId(userId);

            Set<Integer> activatedServiceIds = new HashSet<>(userActivatedServices);
            List<ServiceModel> activatedServices = new ArrayList<>();
            List<ServiceModel> notActivatedServices = new ArrayList<>();

            for (ServiceModel service : services) {
                if (activatedServiceIds.contains(service.getServiceId())) {
                    activatedServices.add(service);
                } else {
                    notActivatedServices.add(service);
                }
            }

            Map<String, List> response = new HashMap<>();
            response.put("activatedServices", activatedServices);
            response.put("exploreServices", notActivatedServices);

            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception exception) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

        }
    }

    public ResponseEntity<String> activateService(Integer userId, Integer serviceId) {
        try {

        } catch (Exception exception) {

        }
    }
}
