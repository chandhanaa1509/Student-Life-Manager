package com.studentlifemanager.repository;

import com.studentlifemanager.model.Note;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface NoteRepository extends MongoRepository<Note, String> {
}