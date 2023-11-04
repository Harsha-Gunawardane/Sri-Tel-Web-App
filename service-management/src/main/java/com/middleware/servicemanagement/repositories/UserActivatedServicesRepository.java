package com.middleware.servicemanagement.repositories;

import com.middleware.servicemanagement.models.UserActivatedServices;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserActivatedServicesRepository extends JpaRepository<UserActivatedServices, Integer> {

    @Query(value = "SELECT u.serviceId FROM user_activated_services u " +
            "WHERE u.userId = ?1", nativeQuery = true)
    List<Integer> findAllServicesByUserId(Integer userId);
}
