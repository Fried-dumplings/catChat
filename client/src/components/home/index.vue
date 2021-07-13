<template>
  <div>
    <h1>ssssssssssssssssssssssssssss</h1>
    <h2>{{ r }}</h2>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const r = ref('22222')
    console.log(r)

    return {
      r,
    }
  },
})
</script>
