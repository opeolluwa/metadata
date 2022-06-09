<template>
  <v-app id="inspire">
    <base-layout>
      <router-view></router-view>
    </base-layout>
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
import BaseLayout from "./components/BaseLayout.vue";

export default Vue.extend({
  components: { BaseLayout },
  name: "App",
  data: () => ({}),
});
</script>


<style lang="scss">
@import "./assets/stylesheets/main.scss";
</style>
