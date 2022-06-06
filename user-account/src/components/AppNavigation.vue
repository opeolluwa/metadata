<template>
  <nav id="app-navigation">
    <ul>
      <li v-for="link in links" :key="link.title">
        <nav-item
          class="text-capitalize"
          :icon="link.icon"
          :title="link.title"
          :route="link.route"
        ></nav-item>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import NavItem from "./NavItem.vue";

export default Vue.extend({
  name: "AppNavigation",
  components: { NavItem },
  data: () => ({
    links: [
      { icon: "mdi-home-variant-outline", title: "home", component: "home" },
      {
        icon: "mdi-account-circle-outline",
        title: "profile",
        component: "profile",
      },
      { icon: "mdi-post", title: "activities", component: "activities" },
      {
        icon: "mdi-bookmark-outline",
        title: "bookmark",
        component: "bookmark",
      },
      { icon: "mdi-security", title: "security", component: "security" },
      { icon: "mdi-cog-outline", title: "settings", component: "settings" },
    ],
  }),
});
</script>

<style lang="scss" scoped>
:root {
  --blue: #007bff;
}
</style>