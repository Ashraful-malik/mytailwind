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
                value.padding,
                value.margin,
                value.border_radius,
                value.padding_top,
                value.padding_bottom,
                value.padding_left,
                value.padding_right,
                value.margin_top,
                value.margin_bottom,
                value.margin_left,
                value.margin_right,
                value.background_color,
                value.text_color,
                value.box_shadow,
                value.font_size,
                value.font_width,
              ]"
            >
              {{ button_text }}
            </button>
          </div>
        </div>
        <div class="toolbar">
          <Toolsbar v-on:custom-change="getWidth($event)" />
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
    getWidth(values) {
      this.value = values;
      this.button_text = values.button_text;
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
