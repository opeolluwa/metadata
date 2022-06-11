<template>
  <div id="app" class="p-0 m-0 ma-0">
    <app-navigation></app-navigation>
    <v-main>
      <v-app-bar
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
        <v-app-bar-title class="small">Hi Drizzle</v-app-bar-title>
        <v-navigation-drawer v-model="drawer">
        <!--   <app-navigation></app-navigation> -->
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus unde aliquam, qui provident et asperiores laborum, quis quo autem, repudiandae voluptas. Quam ratione dolorem iusto nihil cum quasi asperiores dicta.
        </v-navigation-drawer>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab>New </v-tab>
            <v-tab>Popular</v-tab>
            <v-tab>Bookmark</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-3"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-container style="height: 1000px"></v-container>
      </v-sheet>

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
          v-for="link in links"
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
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AccountHeader from "./AccountHeader.vue";
import AppAside from "./AppAside.vue";
import AppNavigation from "./AppNavigation.vue";
export default Vue.extend({
  components: { AppNavigation, AppAside, AccountHeader },
  name: "BaseLayout",

  data: () => ({
    drawer: null,
    links: [
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
