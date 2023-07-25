import Note from "../models/note.model.js";


export class NoteService {
  async fetchNotes() {
    const notesFound = await Note.findAll();
    return notesFound;
  }

  async addNote({ note }) {
    const createdNote = await Note.create(note);
    return createdNote;
  }

  async fetchNote({ idNote }) {
    const noteFound = await Note.findByPk(idNote);
    return noteFound;
  }

  async updateNote({ idNote, note }) {
    const noteFound = await Note.findByPk(idNote);
    const noteSaved = noteFound.set(note).save(note);
    return noteSaved;
  }
}