import Vue from "vue";
import TurbolinksAdapter from "vue-turbolinks";
import Vuetify from "vuetify";
import App from "../app.vue";

Vue.use(Vuetify, TurbolinksAdapter);

document.addEventListener("DOMContentLoaded", () => {
  const app = new Vue({
    vuetify: new Vuetify(),
    render: (h) => h(App),
  }).$mount();
  document.body.appendChild(app.$el);

  console.log(app);
});
