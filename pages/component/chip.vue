<template>
  <div>
    <div class="overflow-hidden">
      <ComponentNavbar />
      <div class="flex flex-row bg-gray-50">
        <div class="sidebar">
          <Sidebar />
        </div>
        <div class="chips">
          <div class="flex items-center justify-center p-4 w-full h-4/5">
            <!-- chips start form here -->
            <div
              class="chip text-center"
              :class="[
                value.text_color,
                value.background_color,
                value.border_color,
                value.border_width,
                value.box_shadow,
                value.border_radius,
                value.padding_x,
                value.padding_y,
              ]"
            >
              <p
                class="text-center"
                :class="[value.font_width, value.font_size]"
              >
                {{ value.chip_text }}
              </p>
            </div>
          </div>
        </div>
        <div class="toolbar">
          <editChip v-on:chip-values="getChipValue($event)" />
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
    getChipValue(values) {
      this.value = values;
    },
  },
};
</script>

<style scoped>
.sidebar {
  flex: 1 1 13%;
}
.chips {
  flex-basis: 60%;
}
.toolbar {
  flex: 1 1 27%;
}
</style>
