<template>
  <aside>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="12" md="12" lg="12" xl="12">
            <v-text-field
              v-model="search"
              outlined
              dense
              type="search"
              placeholder="search here"
              @keyup.enter="search"
              append-icon="mdi-magnify"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <v-list class="d-none">
      <v-list-item
        v-for="category in categories"
        :key="category.title"
        class="text--disabled small"
      >
        <v-list-item-content>
          <v-list-item-title
            >{{ category.title }}
            <v-chip small>{{ category.count }}</v-chip></v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </aside>
</template>

<script>
export default {
  name: "AppAside",
  data: () => ({
    categories: [
      {
        title: "Animation",
        count: 0,
      },
      {
        title: "Code generator",
        count: 0,
      },
      {
        title: "Bookmark",
        count: 0,
      },
      {
        title: "Activities",
        count: 0,
      },
    ],
    search: "",
  }),
};
</script>

<style>
</style>