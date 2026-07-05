package com.studentlifemanager.dto.note;

import lombok.Data;

@Data
public class NoteResponse {

    private String id;

    private String title;

    private String content;

    private String category;
}