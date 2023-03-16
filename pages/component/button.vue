<template>
  <div>
    <div class="overflow-hidden">
      <ComponentNavbar />
      <div class="flex flex-row bg-gray-50">
        <div class="sidebar">
          <Sidebar />
        </div>
        <div class="button">
          <div
            class="flex items-center justify-center max-w-4xl w-4/5 m-auto h-96"
          >
            <button
              :class="[
                value.box_shadow,
                value.font_size,
                value.font_width,
                value.border_radius,
                value.padding_x,
                value.padding_y,
                value.background_color,
                value.text_color,
              ]"
            >
              {{ value.button_text }}
            </button>
          </div>
        </div>
        <div class="toolbar">
          <editButton v-on:button-value="getButtonValue($event)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },

  methods: {
    getButtonValue(values) {
      this.value = values;
    },
  },
};
</script>

<style scoped>
.flex .sidebar {
  flex: 1 1 13%;
}
.flex .button {
  flex-basis: 60%;
}
.flex .toolbar {
  flex: 1 1 27%;
}
</style>
