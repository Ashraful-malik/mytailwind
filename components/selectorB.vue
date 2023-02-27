<template>
  <div class="app">
    <h1>Vue Select</h1>
    <button v-bind:class="selected">Button</button>

    <v-select
      label="countryName"
      :options="options"
      v-model="selected"
    ></v-select>

    <!-- <v-select :options="options" label="title">
      <template v-slot:option="option">
        <span :class="option.icon"></span>
        {{ option.title }}
      </template>
    </v-select> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: ["bg-green-500", "bg-red-500", "bg-pink-500"],
      selected: "bg-green-600",
    };
  },
};
</script>

<style scoped>
:root {
  /* --vs-dropdown-min-width: 160px; */
}
.app {
  max-width: 20rem;
  margin: 1em auto;
}
</style>
