<template>
  <div>
    <h2>ccccccccc</h2>
    <h3>{{ rr }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const rr = ref('222')
    return {
      rr,
    }
  },
})
</script>
