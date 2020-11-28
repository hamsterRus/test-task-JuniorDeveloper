import Vue from 'vue'
import App from './App.vue'
import YmapPlugin from 'vue-yandex-maps'


const settings = {
  apiKey: '8565cf29-b527-4677-8542-8ac3a7c130b6',
  lang: 'ru_RU'
}

Vue.use(YmapPlugin, settings);
new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
