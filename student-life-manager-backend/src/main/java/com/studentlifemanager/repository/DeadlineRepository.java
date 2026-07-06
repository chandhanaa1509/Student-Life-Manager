package com.studentlifemanager.repository;

import com.studentlifemanager.model.Deadline;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DeadlineRepository
        extends MongoRepository<Deadline, String> {

}