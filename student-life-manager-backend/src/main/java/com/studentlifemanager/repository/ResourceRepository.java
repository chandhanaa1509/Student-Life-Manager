package com.studentlifemanager.repository;

import com.studentlifemanager.model.Resource;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ResourceRepository extends MongoRepository<Resource, String> {
}