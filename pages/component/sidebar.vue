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
            <div class="h-full w-64 bg-white p-4 shadow-md overflow-y-scroll">
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
                      class="block py-2 pl-2 item-center text-gray-800 cursor-pointer hover:bg-blue-500 hover:text-white rounded-xl"
                    >
                      <font-awesome-icon
                        icon="fa-solid fa-house"
                        class="mr-2"
                      />
                      Home
                    </li>
                    <li class="block py-2 pl-2 cursor-pointer text-gray-800">
                      <font-awesome-icon
                        icon="fa-solid fa-gauge"
                        class="mr-2"
                      />
                      Dashboard
                    </li>
                    <li class="block py-2 pl-2 cursor-pointer text-gray-800">
                      <font-awesome-icon icon="fa-solid fa-fire" class="mr-2" />
                      Product
                    </li>
                    <li class="block py-2 pl-2 cursor-pointer text-gray-800">
                      <font-awesome-icon
                        icon="fa-solid fa-table"
                        class="mr-2"
                      />
                      Order
                    </li>
                    <li class="block py-2 pl-2 cursor-pointer text-gray-800">
                      <font-awesome-icon icon="fa-solid fa-user" class="mr-2" />
                      User
                    </li>
                  </ul>
                </section>
                <div class="bottom-item">
                  <!-- divider -->
                  <div class="border border-gray-100 mb-4"></div>
                  <ul>
                    <li class="block py-2 pl-2 cursor-pointer text-gray-800">
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
          <CardToolbar v-on:card-values="getCardValue($event)" />
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
    getCardValue(values) {
      this.value = values;
      this.button_text = values.button_text;
    },
  },
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
