<script setup lang="ts">
import type { Note } from '@/models/notes'
import { computed, ref } from 'vue'
import { marked } from 'marked'

interface NoteProps {
  dateCreated: Note['dateCreated']
  content: Note['content']
}

const props = defineProps<NoteProps>()
const emits = defineEmits<{
  (e: 'delete'): void
  (e: 'edit', newContent: string): void
}>()

const editingMode = ref(false)
const noteContent = ref(props.content)
const markedNoteContent = computed(() => marked.parse(noteContent.value))
const formattedDateCreated = computed(() => new Date(props.dateCreated).toLocaleString())

function toggleEditingMode() {
  if (editingMode.value) {
    emits('edit', noteContent.value)
  }
  editingMode.value = !editingMode.value
}
</script>

<template>
  <div class="note">
    <div class="buttons">
      <Button data-testid="edit-btn" @click="toggleEditingMode()">
        {{ editingMode ? 'submit' : 'edit' }}
      </Button>
      <Button class="button" @click="$emit('delete')">delete</Button>
    </div>
    <time class="date" :datetime="formattedDateCreated">{{ formattedDateCreated }}</time>
    <textarea class="textarea" v-if="editingMode" v-model="noteContent"></textarea>
    <div class="content" v-else v-html="markedNoteContent"></div>
  </div>
</template>

<style scoped>
.note {
  margin-top: 2rem;
  border: solid 1px #888888;
  border-radius: 0;
  padding: 1rem;
}
.date {
  display: block;
  margin: 0.5em 0;
}
.textarea {
  min-width: 100%;
  max-width: 100%;
  min-height: 120px;
  font-size: 16px;
  letter-spacing: 0px;
  border: none;
  outline: unset;
  height: 40px;
  padding-left: 10px;
  border-radius: 0;
  width: calc(100% - 10px);
  padding: 5px;
  background: #f2f2f2;
}
.buttons {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  width: 100%;
}
</style>
