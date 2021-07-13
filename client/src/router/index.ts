import { createRouter, createWebHistory } from 'vue-router'

import home from '../view/home/index.vue'
import ChatList from '../view/home/ChatList.vue'
import AddressBook from '../view/home/AddressBook.vue'
import My from '../view/home/My.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {
    //   path: '/',
    //   redirect: '/chatList',
    // },
    {
      path: '/',
      component: home,
      children: [
        {
          path: '',
          component: ChatList,
        },
        {
          path: '/addressBook',
          component: AddressBook,
        },
        {
          path: '/my',
          component: My,
        },
      ],
    },
    {
      path: '/chat/:id/:name',
      component: () => import('../view/Chat.vue'),
    },
  ],
})

export default router
