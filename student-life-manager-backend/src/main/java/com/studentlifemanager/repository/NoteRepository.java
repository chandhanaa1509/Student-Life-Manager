package com.studentlifemanager.repository;

import com.studentlifemanager.model.Note;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface NoteRepository extends MongoRepository<Note, String> {

    List<Note> findByUserId(String userId);

}