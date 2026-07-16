package com.studentlifemanager.controller;

import com.studentlifemanager.dto.note.NoteRequest;
import com.studentlifemanager.dto.note.NoteResponse;
import com.studentlifemanager.service.NoteService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
public class NoteController {

    private final NoteService noteService;

    public NoteController(
            NoteService noteService) {

        this.noteService = noteService;
    }

    @PostMapping
    public NoteResponse addNote(
            @Valid @RequestBody NoteRequest request) {

        return noteService.addNote(request);
    }

    @GetMapping
    public List<NoteResponse> getAllNotes() {

        return noteService.getAllNotes();
    }

    @PutMapping("/{id}")
    public NoteResponse updateNote(
            @PathVariable String id,
            @Valid @RequestBody NoteRequest request) {

        return noteService.updateNote(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteNote(
            @PathVariable String id) {

        noteService.deleteNote(id);
    }
}