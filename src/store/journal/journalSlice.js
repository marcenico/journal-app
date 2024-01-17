import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    active: null,
    isSaving: false,
    messageSaved: '',
    notes: []
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSaved = '';
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = '';
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) return action.payload;
        return note;
      });
      state.messageSaved = `${action.payload.title}, successfully updated`;
    },
    deleteNoteById: (state, action) => {}
  }
});

export const { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } =
  journalSlice.actions;
