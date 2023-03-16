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
              class="badge flex item-center justify-center relative"
              :class="[
                value.width,
                value.height,
                value.background_color,
                value.border_radius,
                value.border_width,
                value.border_color,
                value.box_shadow,
              ]"
            >
              <div
                class="notification-icon w-5 h-5 absolute top-0 -right-1 rounded-full border-2 border-white"
                :class="value.notification_icon_color"
              ></div>
              <div
                class="avatar-name rounded-full w-full flex item-center justify-center py-4"
              >
                <p
                  class="flex items-center"
                  :class="[value.text_color, value.font_width, value.font_size]"
                >
                  {{ value.badge_text }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="toolbar">
          <editBadge v-on:badge-values="getBadgeValue($event)" />
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
    getBadgeValue(values) {
      this.value = values;
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
