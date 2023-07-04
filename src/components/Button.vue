<template>
  <button class="button" v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  display: inline-block;
  padding: 13px 28px;
  border: 1px solid #cccccc;
  border-radius: 0;
  background: white;
  font-weight: 500;
  color: black;
  cursor: pointer;
}
</style>
