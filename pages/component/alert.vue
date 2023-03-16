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
            <!-- alert start -->
            <div
              class="alert-box w-full h-12 flex items-center justify-between"
              :class="[
                value.background_color,
                value.border_width,
                value.border_color,
                value.border_radius,
                value.width,
                value.box_shadow,
              ]"
            >
              <div class="alert-content ml-4 w-full">
                <p
                  :class="[value.text_color, value.font_width, value.font_size]"
                >
                  {{ value.alert_message }}
                </p>
              </div>
              <div class="icon mr-4">
                <p class="text-3xl cursor-pointer" :class="[value.text_color]">
                  &#215;
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="toolbar">
          <editAlert v-on:alert-values="getAlertValue($event)" />
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
    getAlertValue(values) {
      this.value = values;
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
