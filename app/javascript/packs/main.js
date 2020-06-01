import Vue from "vue";
import Vuetify from "vuetify";
// import App from "../app.vue";
import layout from "./components/layout.vue";

Vue.use(Vuetify);

document.addEventListener("turbolinks:load", () => {
  const app = new Vue({
    el: '[data-behavior="vue-app"]',
    vuetify: new Vuetify(),
    components: { layout },
  });
  // document.body.appendChild(app.$el);
});
