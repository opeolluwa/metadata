<template>
  <div>
    <v-form>
      <v-select label="select category" outlined></v-select>
      <v-text-field label="resource name" v-model="Name" required outlined append-icon="mdi-globe-model"></v-text-field>
      <v-text-field label="resource description" name="description" required outlined append-icon="mdi-dots-horizontal"></v-text-field>
      <v-text-field v-model="url" label="https://example.com" required outlined append-icon="mdi-link"></v-text-field>
      <v-btn block color="#4158d0" dark @click="submit">Submit <v-icon right>mdi-plus</v-icon>
      </v-btn>
    </v-form>
  </div>
</template>

<script lang=ts>
export default {
  name: "HomeView",
};
</script>

<style>

</style>