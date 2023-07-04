<script setup lang="ts">
import type { Note as NoteType } from '@/models/notes'
import Note from './Note.vue'
import { useNotesStore } from '@/store/notes'

const { deleteNote, editNote } = useNotesStore()

defineProps<{
  notes: NoteType[]
}>()
</script>

<template>
  <div class="container">
    <Note
      v-for="note in notes"
      :key="note.dateCreated"
      :date-created="note.dateCreated"
      :content="note.content"
      @delete="() => deleteNote(note.id)"
      @edit="(newContent) => editNote(note.id, newContent)"
    />
  </div>
</template>

<style scoped></style>
