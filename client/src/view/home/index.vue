<template>
  <div>
    <router-view />
    <van-tabbar route v-model="active">
      <van-tabbar-item replace to="/" icon="comment-o">Cat</van-tabbar-item>
      <!-- <van-tabbar-item replace to="/addressBook" icon="friends-o">通讯录</van-tabbar-item> -->
      <!-- <van-tabbar-item replace to="/my" icon="contact">我</van-tabbar-item> -->
    </van-tabbar>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Tabbar, TabbarItem, Icon } from 'vant'

export default defineComponent({
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  setup() {
    let active = ref(0)
    const onClickRight = (e: any) => {
      console.log(e)
    }
    return {
      active,
      onClickRight,
    }
  },
})
</script>
