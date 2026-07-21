package com.studentlifemanager.repository;

import com.studentlifemanager.model.Deadline;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface DeadlineRepository
        extends MongoRepository<Deadline, String> {

    List<Deadline> findByUserId(String userId);

    long countByUserId(String userId);

}