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
                class="focus:outline-none focus:ring focus:border-blue-400"
                placeholder="Default input"
                :class="[
                  value.width,
                  value.height,
                  value.border_radius,
                  value.text_color,
                  value.background_color,
                  value.border_width,
                  value.border_color,
                  value.font_size,
                  value.font_width,
                  value.box_shadow,
                  value.padding,
                ]"
              />
            </div>
          </div>
        </div>
        <div class="toolbar">
          <editInputField
            v-on:input-field-values="getInputFieldValue($event)"
          />
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
    getInputFieldValue(values) {
      this.value = values;
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
