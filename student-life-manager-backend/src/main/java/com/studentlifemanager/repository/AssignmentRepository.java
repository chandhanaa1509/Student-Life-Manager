package com.studentlifemanager.repository;

import com.studentlifemanager.model.Assignment;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface AssignmentRepository
        extends MongoRepository<Assignment, String> {

    List<Assignment> findByUserId(String userId);

    long countByUserId(String userId);

}