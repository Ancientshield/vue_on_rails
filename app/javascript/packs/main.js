import Vue from "vue";
import Vuetify from "vuetify";
import App from "../app.vue";

Vue.use(Vuetify);

document.addEventListener("turbolinks:load", () => {
  const app = new Vue({
    vuetify: new Vuetify(),
    render: (h) => h(App),
  }).$mount();
  document.body.appendChild(app.$el);

  console.log(app);
});
