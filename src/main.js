import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import YandexMaps from "vue-yandex-maps";

const settings = {
  apiKey: "1663fba3-2889-4f83-ad0a-974c34d39d9b",
  lang: "ru_RU",
  coordorder: "latlong",
  version: "2.1",
};

Vue.use(YandexMaps, settings);

Vue.config.productionTip = false;

Vue.use(Antd);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
