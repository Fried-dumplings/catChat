<template>
  <div>
    <van-nav-bar title="CatChat" @click-right="onClickRight" fixed placeholder>
      <template #right>
        <van-icon name="ellipsis" size="24" color="#000" />
      </template>
    </van-nav-bar>
    <van-list v-model:loading="state.loading" :finished="state.finished" @load="onLoad">
      <div class="items" v-for="(item, index) in state.list" :key="index" @click="toPath(item)">
        <img class="portrait" :src="item.headImg" />
        <div class="info">
          <p>{{ item.name }}</p>
          <p>{{ item.info || '' }}</p>
        </div>
      </div>
    </van-list>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { List, NavBar, Icon } from 'vant'

export default defineComponent({
  components: {
    [List.name]: List,
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
  },
  setup() {
    const state = reactive({
      list: [
        {
          headImg: '/room.png',
          meta: 'room1',
          name: '公共聊天室',
          info: '',
          finallyTime: new Date(),
        },
        {
          headImg: '/weixin.png',
          meta: 'weixinRobot',
          name: '微信机器人',
          info: '',
          finallyTime: new Date(),
        },
        {
          headImg: '/rot.png',
          meta: 'sizhiRobot',
          name: '思知机器人',
          info: '',
          finallyTime: new Date(),
        },
      ],
      loading: false,
      finished: true,
    })
    const onLoad = () => {
      // state.finished = true
      // if (state.list.length > 0) return
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      /*  setTimeout(() => {
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
    const onClickRight = (e: any) => {
      console.log(e)
    }
    const router = useRouter()
    const toPath = (obj: Object) => {
      router.push({ path: `/chat/${(obj as any).meta}/${(obj as any).name}` })
    }
    return {
      state,
      onLoad,
      onClickRight,
      toPath,
    }
  },
})
</script>

<style lang="postcss" scoped>
.items {
  margin: 6px 12px;
  display: flex;
  align-items: center;
  height: 60px;
  .portrait {
    margin-right: 10px;
    width: 50px;
    height: 50px;
    border-radius: 4px;
    /* border: none; */
    /* background: gold; */
  }
  .info {
    padding-top: 8px;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #eee;
    p:first-child {
      font-size: 16px;
      line-height: 24px;
    }
    p:last-child {
      font-size: 14px;
      color: #ccc;
    }
  }
}
</style>
