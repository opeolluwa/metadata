<template>
  <nav id="app-navigation">
    <div class="user-image-and-name">
      <v-avatar color="indigo">
        <v-icon dark> mdi-account-circle </v-icon>
      </v-avatar>

      <div class="name">
        <span class="user-name-surname">Opeoluwa</span>
        <span class="user-email">Opeoluwa</span>
      </div>
    </div>

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

    <a href="/logout" class="logout-button">
      <v-icon right color="#fff">mdi-logout</v-icon> logout</a
    >
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