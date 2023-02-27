<!-- Please remove this file from your project -->
<template>
  <div class="m-4">
    <button v-bind:class="[selected, padding]">Hello</button>

    <div class="">
      <div>Selected: {{ selected }}</div>

      <select v-model="selected">
        <!-- <option disabled value="">Please select one</option> -->
        <option class="p-5 bg-red-300">bg-red-300</option>
        <option class="bg-blue-600">bg-blue-600</option>
        <option>bg-yellow-400</option>
      </select>

      <select v-model="padding">
        <!-- <option disabled value="">Please select one</option> -->
        <option>p-2</option>
        <option>p-4</option>
        <option>p-8</option>
      </select>
      <button class="bg-gray-200 p-2" @click="copyUrl(selected, padding)">
        copy
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NuxtTutorial",
  data() {
    return {
      selected: "bg-green-500",
      padding: "",
    };
  },
  methods: {
    async copyUrl(select, padding) {
      try {
        const code = `
      <button class="${select} ${padding}">Button</button>
      `;
        await navigator.clipboard.writeText(code);
        alert("Copied");
      } catch ($e) {
        alert("Cannot copy");
      }
    },
  },
};
</script>
