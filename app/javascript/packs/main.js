import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import Layout from "./components/Layout.vue";
import User from "./components/User.vue";
import Navigation from "./components/Navigation.vue";

Vue.use(Vuetify);

document.addEventListener("turbolinks:load", () => {
  const app = new Vue({
    el: '[data-behavior="vue-app"]',
    vuetify: new Vuetify(),
    components: {
      Layout,
      User,
      Navigation,
    },
  });
});
