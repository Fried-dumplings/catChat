<template>
  <div class="chat">
    <van-nav-bar :title="reute.params.name" left-text="返回" left-arrow fixed @click-left="reuter.go(-1)" placeholder />
    <div class="items"></div>
    <van-list v-model:loading="state.loading" :finished="state.finished" @load="onLoad" style="padding-bottom: 60px">
      <Message v-for="(item, index) in state.list" :key="index" :info="item" />
    </van-list>
    <van-field class="input" v-model="sms" :autosize="{ maxHeight: 100, minHeight: 30 }" rows="1" max-rows="3" type="textarea">
      <template #button>
        <van-button size="small" type="primary" @click="submit">发送</van-button>
      </template>
    </van-field>
    <!-- </van-sticky> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, nextTick, onMounted } from 'vue'
import { Tabbar, TabbarItem, List, NavBar, Icon, Sticky, Button, Field } from 'vant'
import { useRouter, useRoute } from 'vue-router'
import Message from '../components/Message/index.vue'
import io from '../socket'

import axios from 'axios'

export default defineComponent({
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [List.name]: List,
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Sticky.name]: Sticky,
    [Button.name]: Button,
    [Field.name]: Field,
    Message,
  },
  setup() {
    const reuter = useRouter()
    const reute = useRoute()
    const { id } = reute.params
    // console.log(reute.params)

    const sms = ref('')
    const state = reactive({
      list: new Array(),
      loading: false,
      finished: true,
    })
    const history = sessionStorage.getItem(id as string)
    // console.log(history)
    // console.log(JSON.parse(history));

    if (history) {
      state.list = JSON.parse(history)
    }
    const onLoad = () => {
      /*  state.finished = true
      if (state.list.length > 0) return
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          state.list.push(state.list.length + 1)
        }
        // 加载状态结束
        state.loading = false
        // 数据全部加载完成
        if (state.list.length >= 40) {
          state.finished = true
        }
        // console.log(state.loading)
        // console.log(state.list)
      }, 200) */
    }
    onMounted(() => {
      nextTick(() => window.scrollTo(0, 999999))
    })
    const submit = () => {
      // const { id } = reute.params

      const msg = sms.value
      if (!msg) return
      state.list.push({
        time: new Date(),
        name: '我',
        msg,
        align: 'right',
      })
      nextTick(() => window.scrollTo(0, 999999))
      sessionStorage.setItem(id as string, JSON.stringify(state.list))

      // io.emit('message', msg)
      sms.value = ''
      if (id === 'weixinRobot') {
        weixinRobot(msg)
      } else if (id === 'sizhiRobot') {
        sizhiRobot(msg)
      } else {
        io.emit('message', {
          id,
          msg,
          tiem: new Date(),
        })
      }
    }

    io.on('message', e => {
      console.log(e)
      state.list.push({
        time: new Date(),
        name: e.name,
        msg: e.msg,
        align: 'left',
      })
      sessionStorage.setItem(id as string, JSON.stringify(state.list))
      nextTick(() => window.scrollTo(0, 999999))
    })

    const weixinRobot = (msg: string) => {
      axios.post('/api/robot/weixinRobot', { msg }).then(res => {
        // console.log(res.data)
        state.list.push({
          time: new Date(),
          name: '微信机器人',
          msg: res.data.answer,
          align: 'left',
        })
        nextTick(() => window.scrollTo(0, 999999))
        sessionStorage.setItem(id as string, JSON.stringify(state.list))
      })
    }

    const sizhiRobot = (msg: string) => {
      axios.post('/api/robot/sizhiRobot', { msg }).then(res => {
        console.log(res.data)
        state.list.push({
          time: new Date(),
          name: '思知机器人',
          msg: res.data.data.info.text,
          align: 'left',
        })
        nextTick(() => window.scrollTo(0, 9999999))
        sessionStorage.setItem(id as string, JSON.stringify(state.list))
      })
    }

    return {
      // onClickRight,
      // onClickLeft,
      submit,
      sms,
      reuter,
      reute,
      state,
      onLoad,
    }
  },
})
</script>

<style lang="postcss" scoped>
.chat {
  /* position: relative; */
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
  height: 100%;
}
.title {
  /* position: fixed; */
  /* top: 0; */
  /* left: 0; */
  /* flex: 1; */
}
.input {
  position: fixed;
  bottom: 0;
  padding-bottom: 20px;
  background-color: #f6f6f6;
}
>>> .van-button {
  padding: 0 12px;
}
>>> .van-field__control {
  padding: 0 8px;
  /* margin-right: 5px; */
  line-height: 30px;
  font-size: 16px;
  border-radius: 4px;
  background-color: #fff;
}
</style>
