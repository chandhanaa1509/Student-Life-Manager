package com.studentlifemanager.service;

import com.studentlifemanager.model.Note;
import com.studentlifemanager.repository.NoteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteService {

    private final NoteRepository noteRepository;

    public NoteService(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    public Note addNote(Note note) {
        return noteRepository.save(note);
    }

    public List<Note> getAllNotes() {
        return noteRepository.findAll();
    }

    public Note updateNote(
            String id,
            Note updatedNote
    ) {

        Note note = noteRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Note not found"));

        note.setTitle(updatedNote.getTitle());
        note.setContent(updatedNote.getContent());

        return noteRepository.save(note);

    }

    public void deleteNote(String id) {

        noteRepository.deleteById(id);

    }

}