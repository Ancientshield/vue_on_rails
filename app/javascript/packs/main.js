import Vue from "vue";
import Vuetify from "vuetify";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.css";
import layout from "./components/layout.vue";
import navigation from "./components/navigation.vue";
import user from "./components/user.vue";
import myfooter from "./components/myfooter.vue";
import carousel from "./components/carousel.vue";

Vue.use(Vuetify);

document.addEventListener("turbolinks:load", () => {
  const app = new Vue({
    el: '[data-behavior="vue-app"]',
    vuetify: new Vuetify(),
    components: {
      layout,
      navigation,
      user,
      myfooter,
      carousel,
    },
  });
});
