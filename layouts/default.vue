<template>
  <div>
    <loading v-if="showHideSpinner" />
    <Nuxt />
  </div>
</template>
<script>
export default {
  data() {
    return {
      showHideSpinner: true,
    };
  },
  beforeCreate() {
    this.showHideSpinner = true;
  },
  head: {
    title: "Mytailwind-Copy and customize Tailwind components",

    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Mytailwind is a website that allows you to easily copy and customize Tailwind components with just a few clicks. No more wasting time searching for the perfect code snippet or struggling to get your design just right – Mytailwind has it all",
      },
      {
        hid: "keywords",
        name: "keywords",
        keywords:
          "tailwind,mytailwind,tailwind components,tailwindcss, css background image,css ui,tailwind ui,components,tailwind css components,customize tailwind component,customize tailwind",
      },
    ],
  },
  mounted() {
    this.showHideSpinner = false;
  },
};
</script>

<style></style>
