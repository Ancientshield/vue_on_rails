import Vue from "vue";
import Vuetify from "vuetify";
import Layout from "components/Layout";
import User from "components/User";
import Navigation from "components/Navigation";

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
