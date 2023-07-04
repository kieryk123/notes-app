<script setup lang="ts">
import { storeToRefs } from 'pinia'
import Notes from './components/Notes.vue'
import { useNotesStore } from '@/store/notes'

const notesStore = useNotesStore()
const { addNewNote } = notesStore
const { sortedNotes } = storeToRefs(notesStore)
</script>

<template>
  <header>
    <h1>The Notes App</h1>
    <p>Add, edit and delete your notes.</p>
    <Button data-testid="add-note-btn" @click="addNewNote()">Add note</Button>
  </header>

  <main>
    <Notes :notes="sortedNotes" />
  </main>
</template>

<style scoped></style>
