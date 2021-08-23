import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import axios from "axios"; //封装之后就不需要在main.js中引入axios了，单独使用需要引入
createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
