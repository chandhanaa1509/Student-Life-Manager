// Purpose:
// Handles database operations for Study Resources.

package com.studentlifemanager.repository;

import com.studentlifemanager.model.Resource;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ResourceRepository extends MongoRepository<Resource, String> {

    List<Resource> findByUserId(String userId);

}