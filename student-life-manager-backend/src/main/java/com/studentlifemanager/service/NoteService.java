package com.studentlifemanager.service;

import com.studentlifemanager.dto.note.NoteRequest;
import com.studentlifemanager.dto.note.NoteResponse;
import com.studentlifemanager.model.Note;
import com.studentlifemanager.model.User;
import com.studentlifemanager.repository.NoteRepository;
import com.studentlifemanager.security.SecurityUtil;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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

    public NoteResponse addNote(
            NoteRequest request) {

        User currentUser = securityUtil.getCurrentUser();

        Note note = new Note();

        note.setTitle(request.getTitle());
        note.setContent(request.getContent());
        note.setUserId(currentUser.getId());

        Note saved = noteRepository.save(note);

        return mapToResponse(saved);
    }

    public List<NoteResponse> getAllNotes() {

        User currentUser = securityUtil.getCurrentUser();

        return noteRepository
                .findByUserId(currentUser.getId())
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public NoteResponse updateNote(
            String id,
            NoteRequest request) {

        User currentUser = securityUtil.getCurrentUser();

        Note note = noteRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Note not found"));

        if (!note.getUserId().equals(currentUser.getId())) {
            throw new RuntimeException("Access denied");
        }

        note.setTitle(request.getTitle());
        note.setContent(request.getContent());

        Note updated = noteRepository.save(note);

        return mapToResponse(updated);
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

    private NoteResponse mapToResponse(
            Note note) {

        NoteResponse response = new NoteResponse();

        response.setId(note.getId());
        response.setTitle(note.getTitle());
        response.setContent(note.getContent());

        return response;
    }
}