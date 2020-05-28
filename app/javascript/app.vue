<template>
  <div id="app">
    <v-app>
      <p>{{ message }}</p>
      <layout />
    </v-app>
  </div>
</template>

<script>
import layout from "./packs/components/layout.vue";

export default {
  data: function() {
    return {
      message: "Hello Vue!",
    };
  },
  components: {
    layout: layout,
  },
};
</script>
