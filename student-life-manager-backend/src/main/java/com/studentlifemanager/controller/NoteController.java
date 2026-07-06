package com.studentlifemanager.controller;

import com.studentlifemanager.model.Note;
import com.studentlifemanager.service.NoteService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
public class NoteController {

    private final NoteService noteService;

    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @PostMapping
    public Note addNote(@RequestBody Note note) {
        return noteService.addNote(note);
    }

    @GetMapping
    public List<Note> getAllNotes() {
        return noteService.getAllNotes();
    }

    @PutMapping("/{id}")
    public Note updateNote(
            @PathVariable String id,
            @RequestBody Note note) {

        return noteService.updateNote(id, note);
    }

    @DeleteMapping("/{id}")
    public void deleteNote(@PathVariable String id) {

        noteService.deleteNote(id);

    }
}