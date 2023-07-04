import type { Note } from '@/models/notes'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const INITIAL_STATE: Note[] = [
  { id: 1688312997894, dateCreated: 1688312997894, content: 'note content' }
]

export const useNotesStore = defineStore(
  'notes',
  () => {
    const notes = ref<Note[]>(INITIAL_STATE)
    const sortedNotes = computed(() =>
      notes.value.sort((noteA, noteB) => noteB.dateCreated - noteA.dateCreated)
    )

    function addNewNote() {
      notes.value.push({
        id: Date.now(),
        dateCreated: Date.now(),
        content: 'Edit note to add text...'
      })
    }

    function deleteNote(id: number) {
      const newNotes = notes.value.filter((note) => note.id !== id)
      notes.value = newNotes
    }

    function editNote(id: number, newContent: string) {
      const noteToEditIdx = notes.value.findIndex((note) => note.id === id)
      const noteToEdit = notes.value[noteToEditIdx]

      if (noteToEdit) {
        notes.value[noteToEditIdx] = { ...noteToEdit, content: newContent }
      }
    }

    return { notes, sortedNotes, addNewNote, deleteNote, editNote }
  },
  { persist: true }
)
