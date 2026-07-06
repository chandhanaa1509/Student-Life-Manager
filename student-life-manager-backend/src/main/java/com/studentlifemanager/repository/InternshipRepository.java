package com.studentlifemanager.repository;

import com.studentlifemanager.model.Internship;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface InternshipRepository
        extends MongoRepository<Internship, String> {

}