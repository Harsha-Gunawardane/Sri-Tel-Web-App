package com.Middleware.Notification.Service.scheduler;
import java.time.LocalDateTime;
import java.util.List;

import com.Middleware.Notification.Service.dao.NotificationRepository;
import com.Middleware.Notification.Service.entity.Notification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class NotificationScheduler {

    @Autowired
    private NotificationRepository notificationRepository;

    @Scheduled(cron = "0 0 * * * ?")
    public void sendNotifications() {
        List<Notification> notifications = notificationRepository.findAll();

        for (Notification notification : notifications) {
            // Send notification to front end using axios
            String url = "http://localhost:3000/notifications";
            String data = "{\"type\": \"" + notification.getType() + "\", \"message\": \"" + notification.getMessage() + "\"}";
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.set("Authorization", "Bearer <your_token_here>");
            ResponseEntity<String> response = new RestTemplate().postForEntity(url, data, String.class);
        }
    }
}
