import { createApp } from 'vue'
import router from './router'
import './assets/normalize.css'
import './assets/reset.css'
// function resetFontSize() {
//   var baseFontSize = 100
//   var designWidth = 750
//   var width = window.innerWidth
//   var currentFontSize = (width / designWidth) * baseFontSize
//   document.getElementsByTagName('html')[0].style.fontSize = currentFontSize + 'px'
//   console.log(currentFontSize);

// }
// window.onresize = function () {
//   resetFontSize()
// };
import App from './App.vue'
createApp(App).use(router).mount('#app')
