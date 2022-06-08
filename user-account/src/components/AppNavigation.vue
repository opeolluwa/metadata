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
      { icon: "mdi-home-variant-outline", title: "home", route: "home" },
      {
        icon: "mdi-account-circle-outline",
        title: "profile",
        route: "profile",
      },
      { icon: "mdi-post", title: "activities", route: "activities" },
      {
        icon: "mdi-bookmark-outline",
        title: "bookmark",
        route: "bookmark",
      },
      { icon: "mdi-security", title: "security", route: "security" },
      { icon: "mdi-cog-outline", title: "settings", route: "settings" },
      { icon: "mdi-step-forward", title: "invite friend", route: "" },

    ],
  }),
});
</script>

<style lang="scss" scoped>
:root {
  --blue: #007bff;
}
</style>