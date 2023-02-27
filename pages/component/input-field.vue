<template>
  <div>
    <div class="overflow-hidden">
      <ComponentNavbar />
      <div class="flex flex-row bg-gray-50">
        <div class="sidebar">
          <Sidebar />
        </div>
        <div class="input">
          <div class="flex items-center justify-center p-4 w-full h-4/5">
            <div class="input-field">
              <input
                type="text"
                class="w-80 h-9 p-2 text-base font-normal rounded-md border focus:outline-none focus:ring focus:border-blue-400"
                placeholder="Default input "
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
.input {
  flex-basis: 60%;
}
.toolbar {
  flex: 1 1 27%;
}
</style>
