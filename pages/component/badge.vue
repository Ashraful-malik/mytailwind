<template>
  <div>
    <div class="overflow-hidden">
      <ComponentNavbar />
      <div class="flex flex-row bg-gray-50">
        <div class="sidebar">
          <Sidebar />
        </div>
        <div class="badges">
          <div class="flex items-center justify-center p-4 w-full h-4/5">
            <div
              class="badge w-16 h-16 rounded-full bg-red-200 flex item-center justify-center relative"
            >
              <div
                class="notification-icon w-5 h-5 bg-red-500 absolute top-0 -right-1 rounded-full border-2 border-white"
              ></div>
              <div
                class="avatar-name rounded-full w-full h-full flex item-center justify-center py-4"
              >
                <p class="text-2xl font-semibold text-red-800">AM</p>
              </div>
            </div>
          </div>
        </div>
        <div class="toolbar">
          <editBadge v-on:card-values="getCardValue($event)" />
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
.badges {
  flex-basis: 60%;
}
.toolbar {
  flex: 1 1 27%;
}
</style>
