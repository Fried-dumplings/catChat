<template>
  <div>
    <h1>my</h1>
    
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Tabbar, TabbarItem } from 'vant'

export default defineComponent({
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  setup() {
    let active = ref(0)
    return {
      active,
    }
  },
})
</script>
