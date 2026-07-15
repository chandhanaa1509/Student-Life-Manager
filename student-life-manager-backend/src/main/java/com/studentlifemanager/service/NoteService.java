package com.studentlifemanager.service;

import com.studentlifemanager.model.Note;
import com.studentlifemanager.model.User;
import com.studentlifemanager.repository.NoteRepository;
import com.studentlifemanager.security.SecurityUtil;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteService {

    private final NoteRepository noteRepository;
    private final SecurityUtil securityUtil;

    public NoteService(
            NoteRepository noteRepository,
            SecurityUtil securityUtil) {

        this.noteRepository = noteRepository;
        this.securityUtil = securityUtil;
    }

    public Note addNote(Note note) {

        User currentUser = securityUtil.getCurrentUser();

        note.setUserId(currentUser.getId());

        return noteRepository.save(note);
    }

    public List<Note> getAllNotes() {

        User currentUser = securityUtil.getCurrentUser();

        return noteRepository.findByUserId(currentUser.getId());
    }

    public Note updateNote(
            String id,
            Note updatedNote
    ) {

        User currentUser = securityUtil.getCurrentUser();

        Note note = noteRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Note not found"));

        if (!note.getUserId().equals(currentUser.getId())) {
            throw new RuntimeException("Access denied");
        }

        note.setTitle(updatedNote.getTitle());
        note.setContent(updatedNote.getContent());

        return noteRepository.save(note);
    }

    public void deleteNote(String id) {

        User currentUser = securityUtil.getCurrentUser();

        Note note = noteRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Note not found"));

        if (!note.getUserId().equals(currentUser.getId())) {
            throw new RuntimeException("Access denied");
        }

        noteRepository.delete(note);
    }
}