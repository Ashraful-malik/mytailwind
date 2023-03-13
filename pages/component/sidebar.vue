<template>
  <div>
    <div class="overflow-hidden">
      <ComponentNavbar />
      <div class="flex flex-row bg-gray-50">
        <div class="sidebar">
          <Sidebar />
        </div>
        <div class="sidebars">
          <div
            class="flex items-center justify-center p-2 w-full h-screen mb-7"
          >
            <div
              class="h-full w-64 bg-white p-4 shadow-md overflow-y-scroll"
              :class="value.background_color"
            >
              <div class="logo flex items-center">
                <img
                  src="~/assets/images/Logo.svg"
                  alt="logo"
                  class="w-7 mr-2"
                />
                <p class="text-xl font-semibold">Mytailwind</p>
              </div>
              <!-- divider -->
              <div class="border border-gray-100 mt-4"></div>
              <div class="links flex flex-col justify-between w-full h-full">
                <section class="items mt-6">
                  <ul>
                    <li
                      class="block py-2 pl-2 item-center cursor-pointer rounded-xl"
                      :class="[
                        value.text_color,
                        `hover:${hover_bg_color}`,
                        `hover:${hover_text_color}`,
                      ]"
                    >
                      <font-awesome-icon
                        icon="fa-solid fa-house"
                        class="mr-2"
                      />
                      Home
                    </li>
                    <li
                      class="block py-2 pl-2 cursor-pointer rounded-xl"
                      :class="[
                        value.text_color,
                        `hover:${value.hover_bg_color}`,
                        `hover:${value.hover_text_color}`,
                      ]"
                    >
                      <font-awesome-icon
                        icon="fa-solid fa-gauge"
                        class="mr-2"
                      />
                      Dashboard
                    </li>
                    <li
                      class="block py-2 pl-2 cursor-pointer rounded-xl"
                      :class="[
                        value.text_color,
                        `hover:${value.hover_bg_color}`,
                        `hover:${value.hover_text_color}`,
                      ]"
                    >
                      <font-awesome-icon icon="fa-solid fa-fire" class="mr-2" />
                      Product
                    </li>
                    <li
                      class="block py-2 pl-2 cursor-pointer rounded-xl"
                      :class="[
                        value.text_color,
                        `hover:${value.hover_bg_color}`,
                        `hover:${value.hover_text_color}`,
                      ]"
                    >
                      <font-awesome-icon
                        icon="fa-solid fa-table"
                        class="mr-2"
                      />
                      Order
                    </li>
                    <li
                      class="block py-2 pl-2 cursor-pointer rounded-xl"
                      :class="[
                        value.text_color,
                        `hover:${value.hover_bg_color}`,
                        `hover:${value.hover_text_color}`,
                      ]"
                    >
                      <font-awesome-icon icon="fa-solid fa-user" class="mr-2" />
                      User
                      {{ value }}
                    </li>
                  </ul>
                </section>
                <div class="bottom-item">
                  <!-- divider -->
                  <div class="border border-gray-100 mb-4"></div>
                  <ul>
                    <li
                      class="block py-2 pl-2 cursor-pointer rounded-xl"
                      :class="[
                        value.text_color,
                        `hover:${value.hover_bg_color}`,
                        `hover:${value.hover_bg_color}`,
                      ]"
                    >
                      <font-awesome-icon icon="fa-solid fa-gear" class="mr-2" />
                      Setting
                    </li>
                    <li class="block py-2 pl-2 text-red-500 cursor-pointer">
                      <font-awesome-icon
                        icon="fa-solid fa-arrow-right-from-bracket"
                        class="mr-2 text-red-500"
                      />
                      Logout
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="toolbar">
          <editSidebar v-on:sidebar-values="getSidebarValue($event)" />
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
      hover_text_color: "text-white",
      hover_bg_color: "bg-blue-500",
    };
  },

  methods: {
    getSidebarValue(values) {
      this.value = values;
      this.hover_bg_color = values.hover_bg_color;
      this.hover_text_color = values.hover_text_color;
    },
  },
  created() {},
};
</script>

<style scoped>
.sidebar {
  flex: 1 1 13%;
}
.sidebars {
  flex-basis: 60%;
}
.toolbar {
  flex: 1 1 27%;
}
</style>
