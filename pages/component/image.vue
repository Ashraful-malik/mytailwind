<template>
  <div>
    <div class="overflow-hidden">
      <ComponentNavbar />
      <div class="flex flex-row bg-gray-50">
        <div class="sidebar">
          <Sidebar />
        </div>
        <div class="images">
          <div class="flex items-center justify-center p-4 w-full h-4/5">
            <div class="image w-64 h-64 bg-red-500 rounded-md">
              <img
                src="https://images.unsplash.com/photo-1560015534-cee980ba7e13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                alt="image "
                class="w-full h-full object-cover object-top rounded-xl"
              />
            </div>
          </div>
        </div>
        <div class="toolbar">
          <CardToolbar v-on:card-values="getCardValue($event)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Toolsbar from "../../components/Toolsbar.vue";

export default {
  data() {
    return {
      value: "",
      button_text: "Create account",
    };
  },
  components: { Toolsbar },
  methods: {
    getCardValue(values) {
      this.value = values;
      this.button_text = values.button_text;
    },
  },
};
</script>

<style scoped>
.sidebar {
  flex: 1 1 13%;
}
.images {
  flex-basis: 60%;
}
.toolbar {
  flex: 1 1 27%;
}
</style>
