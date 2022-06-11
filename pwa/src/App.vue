<template>
  <v-app id="inspire">
    <app-navigation class="d-none d-sm-block"></app-navigation>
    <v-app-bar
      class="d-sm-none"
      absolute
      color="#4158d0"
      dark
      dense
      app
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
      <!-- <app-navigation></app-navigation> -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Meta Data </v-list-item-title>
          <!-- <v-list-item-subtitle> subtext </v-list-item-subtitle> -->
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list nav>
        <template v-for="item in sideNavLinks">
          <template v-if="item.divider">
            <v-divider :key="item.title"></v-divider>
          </template>

          <template v-else>
            <v-list-item
              v-model="active"
              :key="item.title"
              :to="{ name: item.route }"
              exact
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title class="text-capitalize">{{
                  item.title
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </template>

        <v-list-item style="cursor: pointer">
          <v-list-item-icon>
            <v-icon>mdi-share-variant</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text-capitalize"
              >invite friend</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
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
    <app-aside class="d-none"></app-aside>
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
// import AccountHeader from "./components/AccountHeader.vue";
import AppAside from "./components/AppAside.vue";
import AppNavigation from "./components/AppNavigation.vue";
export default Vue.extend({
  components: { AppNavigation, AppAside /* AccountHeader */ },

  name: "App",
  data: () => ({
    drawer: null,
    active: 1,
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
    sideNavLinks: [
      { icon: "mdi-home-variant-outline", title: "home", route: "home" },
      {
        icon: "mdi-account-circle",
        title: "profile",
        route: "profile",
      },
      {
        icon: "mdi-bookmark-outline",
        title: "bookmark",
        route: "bookmark",
      },

      { icon: "mdi-security", title: "security", route: "security" },
      { divider: true },

      { icon: "mdi-cog-outline", title: "settings", route: "settings" },
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
