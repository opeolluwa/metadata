<template>
  <v-app id="inspire">
    <app-navigation class="d-none d-sm-block"></app-navigation>
    <v-main>
      <v-app-bar
        class="d-sm-none"
        absolute
        color="#4158d0"
        dark
        dense
        shrink-on-scroll
        prominent
        src="https://picsum.photos/1920/1080?random"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-3"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title class="small">Meta Data</v-app-bar-title>

        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute class="d-sm-none">
        <app-navigation></app-navigation>
      </v-navigation-drawer>

      <v-container>
        <account-header name="Drizzle"></account-header>
        <slot class="view"></slot>
      </v-container>
      <v-bottom-navigation
        app
        grow
        class="d-sm-none"
        shift
        background-color="#fff"
      >
        <v-btn
          v-for="link in bottomNavLinks"
          :key="link.title"
          :to="{ name: link.route }"
          color="#101010"
          icon
        >
          <span class="text-capitalize">{{ link.title }}</span>
          <v-icon>{{ link.icon }}</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-main>
    <app-aside></app-aside>
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
import AccountHeader from "./components/AccountHeader.vue";
import AppAside from "./components/AppAside.vue";
import AppNavigation from "./components/AppNavigation.vue";
export default Vue.extend({
  components: { AppNavigation, AppAside, AccountHeader },

  name: "App",
  data: () => ({
    drawer: null,
    bottomNavLinks: [
      { icon: "mdi-home-variant-outline", title: "home", route: "home" },
      {
        icon: "mdi-bookmark-outline",
        title: "bookmark",
        route: "bookmark",
      },
      { icon: "mdi-cog-outline", title: "settings", route: "settings" },
      {
        icon: "mdi-account-circle",
        title: "profile",
        route: "profile",
      },
    ],
  }),
});
</script>


<style lang="scss">
:root {
  --black: #101010;
  --grey: #7d7d7d;
  --white: #f2f2f2;
  --blue: #4158d0;
  --pink: #c850c0;
  --yellow: #ffcc70;
  --red: #e92929f1;
  --green: rgb(46, 136, 46);
  --user-account-border: darken(color: #fafafa, amount: 5);
  --grey-lightened: #fafafa;
}
@import "./assets/stylesheets/main.scss";
</style>
