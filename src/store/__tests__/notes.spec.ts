import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { INITIAL_STATE, useNotesStore } from '../notes'

describe('Notes Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('adds new note', () => {
    const notesStore = useNotesStore()
    expect(notesStore.notes).toHaveLength(1)
    notesStore.addNewNote()
    expect(notesStore.notes).toHaveLength(2)
  })

  it('updates note', () => {
    const notesStore = useNotesStore()
    notesStore.editNote(INITIAL_STATE[0].id, 'xyz')
    expect(notesStore.notes[0].content).toBe('xyz')
  })

  it('deletes note', () => {
    const notesStore = useNotesStore()
    expect(notesStore.notes).toHaveLength(2)
    notesStore.deleteNote(INITIAL_STATE[0].id)
    expect(notesStore.notes).toHaveLength(1)
  })
})
