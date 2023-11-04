package com.Middleware.Notification.Service.web;

import com.Middleware.Notification.Service.dao.NotificationRepository;
import com.Middleware.Notification.Service.entity.Notification;
import com.Middleware.Notification.Service.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/notifications")
public class NotificationController {

    @Autowired
    private NotificationRepository notificationRepository;

    @GetMapping
    public List<Notification> getAllNotifications() {
        return notificationRepository.findAll();
    }

    @PostMapping
    public Notification createNotification(@RequestBody Notification notification) {
        return notificationRepository.save(notification);
    }

    @GetMapping("/{id}")
    public Notification getNotificationById(@PathVariable Long id) throws ResourceNotFoundException {
        return notificationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Notification not found with id " + id));
    }

    @PutMapping("/{id}")
    public Notification updateNotification(@PathVariable Long id, @RequestBody Notification notificationDetails) throws ResourceNotFoundException {
        Notification notification = notificationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Notification not found with id " + id));

        notification.setType(notificationDetails.getType());
        notification.setMessage(notificationDetails.getMessage());

        return notificationRepository.save(notification);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteNotification(@PathVariable Long id) throws ResourceNotFoundException {
        Notification notification = notificationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Notification not found with id " + id));

        notificationRepository.delete(notification);

        return ResponseEntity.ok().build();
    }
}
