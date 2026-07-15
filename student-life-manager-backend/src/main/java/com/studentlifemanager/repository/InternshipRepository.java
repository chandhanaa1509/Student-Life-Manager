package com.studentlifemanager.repository;

import com.studentlifemanager.model.Internship;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface InternshipRepository
        extends MongoRepository<Internship, String> {

    List<Internship> findByUserId(String userId);

}