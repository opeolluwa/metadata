<template>
  <div id="app" class="p-0 m-0 ma-0">
    <app-navigation></app-navigation>
    <v-main><slot></slot></v-main>
    <app-aside></app-aside>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppAside from "./AppAside.vue";
import AppNavigation from "./AppNavigation.vue";

export default Vue.extend({
  components: { AppNavigation, AppAside },
  name: "BaseLayout",
  data: () => ({}),
});
</script>
