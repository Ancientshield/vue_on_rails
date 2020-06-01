import Vue from "vue";
import NavigationApp from "./components/navigation.vue";

document.addEventListener("turbolinks:load", () => {
  const app = new Vue({
    render: (h) => h(NavigationApp),
  }).$mount();

  document.body.insertBefore(app.$el, document.body.firstChild);
});
