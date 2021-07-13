<template>
  <div class="msg-item">
    <img :class="`head head-${info.align}`" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fc8%2Fdd%2Fb9%2Fc8ddb934a69d90216f1b406cf3975475.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628781112&t=639a16029240e0527e1b669db972547c" alt="" />
    <div :class="`info info-${info.align}`">
      <span>{{ info.name }} [{{ `${info.time}`.slice(0,19) }}]</span>
      <span>{{ info.msg }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import { useRouter } from 'vue-router'

interface PropInfo {
  time?: Date
  name: string
  msg: string
  headSrc?: string
  align: string | 'left' | 'right'
}

export default defineComponent({
  props: {
    info: {
      type: Object as PropType<PropInfo>,
      required: true,
    },
  },
  setup() {
    const reuter = useRouter()
    const sms = ref('')

    return {
      sms,
      reuter,
    }
  },
})
</script>

<style lang="postcss" scoped>
.msg-item {
  padding: 0 15px;
  margin: 20px 0;
  position: relative;

  .head {
    position: absolute;
    top: 0;
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
  .head-left {
    left: 15px;
  }
  .head-right {
    right: 15px;
  }
}
.info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 60px;
  span:first-child {
    margin-bottom: 5px;
    max-width: 85%;
    font-size: 12px;
  }
  span:last-child {
    display: inline-block;
    max-width: 85%;
    background-color: #e6e6e6;
    padding: 10px;
    border-radius: 5px;
    line-height: 24px;
  }
}
.info-left {
  align-items: flex-start;
}
.info-right {
  align-items: flex-end;
  span:last-child {
    background-color: #93c5fa;
    /* color: #fff; */
  }
}
</style>
