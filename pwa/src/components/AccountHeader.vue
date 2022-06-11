<template>
  <div>Hi {{ name }}</div>
</template>

<script>
export default {
  name: "AccountHeader",
  props: {
    name: {
      type: String,
    },
  },
};
</script>

<style>
</style>