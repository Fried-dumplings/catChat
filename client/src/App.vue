<template>
  <router-view></router-view>
  <!-- <img alt="Vue logo"  src="./assets/logo.png" /> -->
  <!-- <HelloWorld ref="hello" msg="Hello Vue 3 + TypeScript + Vite" h='222' /> -->
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },

  setup(props, ctx) {
    const hello = ref(null)
    // onMounted(() => {
    //   console.log(hello,'mm')
    // })
    // console.log(hello, 'hh')

    // console.log(ctx.attrs)

    return {
      hello
    }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 100vh;
}
</style>
