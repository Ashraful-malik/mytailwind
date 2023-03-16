<template>
  <div>
    <div class="overflow-hidden">
      <ComponentNavbar />
      <div class="flex flex-row bg-gray-50">
        <div class="component_sidebar">
          <Sidebar />
        </div>
        <div class="sidebar">
          <div
            class="flex items-center justify-center p-2 w-full h-screen mb-7"
          >
            <!-- sidebar start -->
            <div
              class="h-full bg-white p-4 shadow-md overflow-y-scroll"
              :class="[value.background_color, value.width, value.height]"
            >
              <div class="logo flex items-center">
                <img
                  src="~/assets/images/Logo.svg"
                  alt="logo"
                  class="w-7 mr-2"
                />

                <p class="text-xl font-semibold" :class="value.text_color">
                  Mytailwind
                </p>
              </div>
              <!-- divider -->
              <div class="border border-gray-100 mt-4"></div>
              <div class="links flex flex-col justify-between w-full h-full">
                <section class="items" :class="value.padding_top">
                  <ul>
                    <li
                      class="item-center cursor-pointer rounded-xl flex items-center"
                      :class="[
                        value.text_color,
                        `hover:${value.hover_bg_color}`,
                        `hover:${value.hover_text_color}`,
                        value.font_size,
                        value.font_width,
                        value.padding_left,
                        value.padding,
                      ]"
                    >
                      <!-- Replace this icons with your icons "use same class values" -->
                      <font-awesome-icon
                        icon="fa-solid fa-house"
                        class="mr-2"
                      />
                      <!--↑↑↑↑↑↑ Replace ↑↑↑↑↑↑-->

                      <p>Home</p>
                    </li>
                    <li
                      class="flex items-center cursor-pointer rounded-xl"
                      :class="[
                        value.text_color,
                        `hover:${value.hover_bg_color}`,
                        `hover:${value.hover_text_color}`,
                        value.font_size,
                        value.font_width,
                        value.padding_left,
                        value.padding,
                      ]"
                    >
                      <!-- Replace this icons with your icons "use same class values" -->
                      <font-awesome-icon
                        icon="fa-solid fa-gauge"
                        class="mr-2"
                      />
                      <!--↑↑↑↑↑↑ Replace ↑↑↑↑↑↑-->
                      <p>Dashboard</p>
                    </li>
                    <li
                      class="flex items-center cursor-pointer rounded-xl"
                      :class="[
                        value.text_color,
                        `hover:${value.hover_bg_color}`,
                        `hover:${value.hover_text_color}`,
                        value.font_size,
                        value.font_width,
                        value.padding_left,
                        value.padding,
                      ]"
                    >
                      <!-- Replace this icons with your icons "use same class values" -->
                      <font-awesome-icon icon="fa-solid fa-fire" class="mr-2" />
                      <!--↑↑↑↑↑↑ Replace ↑↑↑↑↑↑-->
                      <p>Product</p>
                    </li>
                    <li
                      class="flex items-center cursor-pointer rounded-xl"
                      :class="[
                        value.text_color,
                        `hover:${value.hover_bg_color}`,
                        `hover:${value.hover_text_color}`,
                        value.font_size,
                        value.font_width,
                        value.padding_left,
                        value.padding,
                      ]"
                    >
                      <!-- Replace this icons with your icons "use same class values" -->
                      <font-awesome-icon
                        icon="fa-solid fa-table"
                        class="mr-2"
                      />
                      <!--↑↑↑↑↑↑ Replace ↑↑↑↑↑↑-->
                      <p>Order</p>
                    </li>
                    <li
                      class="flex items-center cursor-pointer rounded-xl"
                      :class="[
                        value.text_color,
                        `hover:${value.hover_bg_color}`,
                        `hover:${value.hover_text_color}`,
                        value.font_size,
                        value.font_width,
                        value.padding_left,
                        value.padding,
                      ]"
                    >
                      <!-- Replace this icons with your icons "use same class values" -->
                      <font-awesome-icon icon="fa-solid fa-user" class="mr-2" />
                      <!--↑↑↑↑↑↑ Replace ↑↑↑↑↑↑-->
                      <p>User</p>
                    </li>
                  </ul>
                </section>
                <div class="bottom-item">
                  <!-- divider -->
                  <div class="border border-gray-100 mb-4"></div>
                  <ul>
                    <li
                      class="flex items-center cursor-pointer rounded-xl"
                      :class="[
                        value.text_color,
                        `hover:${value.hover_bg_color}`,
                        `hover:${value.hover_text_color}`,
                        value.font_size,
                        value.font_width,
                        value.padding_left,
                        value.padding,
                      ]"
                    >
                      <!-- Replace this icons with your icons "use same class values" -->
                      <font-awesome-icon icon="fa-solid fa-gear" class="mr-2" />
                      <!--↑↑↑↑↑↑ Replace ↑↑↑↑↑↑-->
                      <p>Setting</p>
                    </li>
                    <li
                      class="flex items-center p-2 text-red-500 cursor-pointer"
                      :class="[
                        value.font_width,
                        value.font_size,
                        value.padding_left,
                        value.padding,
                      ]"
                    >
                      <!-- Replace this icons with your icons "use same class values" -->
                      <font-awesome-icon
                        icon="fa-solid fa-arrow-right-from-bracket"
                        class="mr-2 text-red-500"
                      />
                      <!--↑↑↑↑↑↑ Replace ↑↑↑↑↑↑-->
                      <p>Logout</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="toolbar">
          <editSidebar
            v-on:sidebar-values="getSidebarValue($event)"
            v-on:change="getdata($event)"
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
    getSidebarValue(values) {
      this.value = values;
    },
  },
};
</script>

<style scoped>
.component_sidebar {
  flex: 1 1 13%;
}
.sidebar {
  flex-basis: 60%;
}
.toolbar {
  flex: 1 1 27%;
}
</style>
