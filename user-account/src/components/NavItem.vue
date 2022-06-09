<template>
  <router-link :to="{ name: route }" class="nav-item">
    <v-icon>{{ icon }}</v-icon> {{ title }}
  </router-link>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>