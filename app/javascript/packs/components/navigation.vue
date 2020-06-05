<template>
  <div>
    <v-breadcrumbs :items="items" large></v-breadcrumbs>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: "Dashboard",
        disabled: false,
        href: "#"
      },
      {
        text: "Link 1",
        disabled: false,
        href: "#"
      },
      {
        text: "Link 2",
        disabled: true,
        href: "#"
      }
    ]
  })
};
</script>