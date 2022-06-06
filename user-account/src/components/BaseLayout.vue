<template>
  <div id="app" class="p-0 m-0 ma-0">
    <app-navigation></app-navigation>
    <main ><slot></slot></main>
    <aside>aside</aside>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppNavigation from "./AppNavigation.vue";

export default Vue.extend({
  components: { AppNavigation },
  name: "BaseLayout",
  data: () => ({}),
});
</script>
