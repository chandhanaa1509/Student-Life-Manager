package com.studentlifemanager.service;

import com.studentlifemanager.dto.note.NoteRequest;
import com.studentlifemanager.dto.note.NoteResponse;
import com.studentlifemanager.model.Note;
import com.studentlifemanager.repository.NoteRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class NoteService {

    private final NoteRepository noteRepository;

    public NoteService(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    public NoteResponse createNote(NoteRequest request) {

        Note note = new Note();

        note.setTitle(request.getTitle());
        note.setContent(request.getContent());
        note.setCategory(request.getCategory());
        note.setUserId("demo-user");

        Note saved = noteRepository.save(note);

        return mapToResponse(saved);
    }

    public List<NoteResponse> getAllNotes() {

        return noteRepository.findByUserId("demo-user")
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public NoteResponse getNoteById(String id) {

        Note note = noteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Note not found"));

        return mapToResponse(note);
    }

    public NoteResponse updateNote(String id, NoteRequest request) {

        Note note = noteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Note not found"));

        note.setTitle(request.getTitle());
        note.setContent(request.getContent());
        note.setCategory(request.getCategory());

        Note updated = noteRepository.save(note);

        return mapToResponse(updated);
    }

    public void deleteNote(String id) {
        noteRepository.deleteById(id);
    }

    private NoteResponse mapToResponse(Note note) {

        NoteResponse response = new NoteResponse();

        response.setId(note.getId());
        response.setTitle(note.getTitle());
        response.setContent(note.getContent());
        response.setCategory(note.getCategory());

        return response;
    }
}