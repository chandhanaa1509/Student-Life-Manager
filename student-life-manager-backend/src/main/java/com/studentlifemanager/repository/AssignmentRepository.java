package com.studentlifemanager.repository;

import com.studentlifemanager.model.Assignment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AssignmentRepository
        extends MongoRepository<Assignment, String> {
}