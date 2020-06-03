import Vue from "vue";
import Vuetify from "vuetify";
// import Layout from "./components/Layout";
import Navigation from "./components/Navigation";
import User from "./components/User";

Vue.use(Vuetify);

document.addEventListener("turbolinks:load", () => {
  const app = new Vue({
    el: '[data-behavior="vue-app"]',
    vuetify: new Vuetify(),
    components: {
      // Layout,
      Navigation,
      User,
    },
  });
});
