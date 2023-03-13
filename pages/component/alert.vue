<template>
  <div>
    <div class="overflow-hidden">
      <ComponentNavbar />
      <div class="flex flex-row bg-gray-50">
        <div class="sidebar">
          <Sidebar />
        </div>
        <div class="alert">
          <div class="flex items-center justify-center p-4 w-full h-4/5">
            <div
              class="alert-box w-full bg-green-400 h-12 flex items-center justify-between rounded-md border border-green-500"
            >
              <div class="alert-content ml-4">
                <p class="text-base font-medium text-green-900">
                  You successfully completed the task
                </p>
              </div>
              <div class="icon mr-4">
                <p class="text-3xl text-green-800 cursor-pointer">&#215;</p>
              </div>
            </div>
          </div>
        </div>
        <div class="toolbar">
          <editAlert v-on:card-values="getCardValue($event)" />
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
.alert {
  flex-basis: 60%;
}
.toolbar {
  flex: 1 1 27%;
}
</style>
