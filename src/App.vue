<script setup>
  import { ref } from 'vue'
  import Example from './Example.vue'

  const isHeadlineVisible = ref(false)
  const canRenderComponent = ref(true)
</script>

<template>
  <div>
    <h3
      v-show="isHeadlineVisible"
      data-test="headline"
    >
      I am now visible, yay!
    </h3>

    <button
      data-test="toggle-headline"
      @click="isHeadlineVisible = !isHeadlineVisible"
    >
      Toggle Headline
    </button>

    <button
      data-test="toggle-component"
      @click="canRenderComponent = !canRenderComponent"
    >
      Toggle Component
    </button>

    <Example v-if="canRenderComponent" />
  </div>
</template>
