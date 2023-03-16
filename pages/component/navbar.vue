<template>
  <div>
    <div class="">
      <ComponentNavbar />
      <div class="flex flex-row bg-gray-50">
        <div class="sidebar">
          <Sidebar />
        </div>
        <div class="navbar">
          <div class="flex items-center justify-center m-2 h-80">
            <nav
              class="w-full h-14 flex items-center"
              :class="[
                value.background_color,
                value.width,
                value.height,
                value.justify_spacing,
                value.padding,
              ]"
            >
              <div class="logo mr-4">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="logo"
                  class="w-8"
                />
              </div>
              <div class="links">
                <ul class="flex items-center">
                  <li
                    class="cursor-pointer"
                    :class="[
                      value.text_color,
                      value.font_size,
                      value.font_width,
                      value.margin_right,
                    ]"
                  >
                    Home
                  </li>
                  <li
                    class="cursor-pointer"
                    :class="[
                      value.text_color,
                      value.font_size,
                      value.font_width,
                      value.margin_right,
                    ]"
                  >
                    About
                  </li>
                  <li
                    class="cursor-pointer"
                    :class="[
                      value.text_color,
                      value.font_size,
                      value.font_width,
                      value.margin_right,
                    ]"
                  >
                    Service
                  </li>
                  <li
                    class="cursor-pointer"
                    :class="[
                      value.text_color,
                      value.font_size,
                      value.font_width,
                    ]"
                  >
                    ContactUs
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div class="toolbar">
          <editNavbar v-on:navbar-value="getNavbarValues($event)" />
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
    getNavbarValues(values) {
      this.value = values;
    },
  },
};
</script>

<style scoped>
.flex .sidebar {
  flex: 1 1 13%;
}
.flex .navbar {
  flex-basis: 60%;
}
.flex .toolbar {
  flex: 1 1 27%;
}
</style>
