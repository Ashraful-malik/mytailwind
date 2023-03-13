<template>
  <div>
    <div class="">
      <ComponentNavbar />
      <div class="flex flex-row bg-gray-50">
        <div class="sidebar">
          <Sidebar />
        </div>
        <div class="navbar">
          <div class="flex items-center justify-center m-auto h-80">
            <nav
              class="w-full h-14 flex items-center justify-between m-2 p-4"
              :class="[
                value.background_color,
                value.width,
                value.height,
                value.justify_spacing,
              ]"
            >
              <div class="logo">
                <img src="@/assets/images/Logo.svg" alt="logo" class="w-6" />
              </div>
              <div class="links">
                <ul class="flex items-center">
                  <li
                    class="ml-6 cursor-pointer"
                    :class="[
                      value.text_color,
                      value.font_size,
                      value.font_width,
                    ]"
                  >
                    Home
                  </li>
                  <li
                    class="ml-6 cursor-pointer"
                    :class="[
                      value.text_color,
                      value.font_size,
                      value.font_width,
                    ]"
                  >
                    About
                  </li>
                  <li
                    class="ml-6 cursor-pointer"
                    :class="[
                      value.text_color,
                      value.font_size,
                      value.font_width,
                    ]"
                  >
                    Service
                  </li>
                  <li
                    class="ml-6 cursor-pointer"
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
