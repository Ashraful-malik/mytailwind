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
            <footer
              class="footer-container w-full bg-gray-800 flex items-center justify-center p-4 flex-col"
            >
              <div class="logo flex items-center">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="logo"
                  class="w-9 rounded-full"
                />
                <p class="text-lg font-semibold text-white ml-2">Mylogo</p>
              </div>
              <div class="links mt-8 w-2/4">
                <ul class="flex items-end justify-between">
                  <li class="text-base text-gray-400">
                    <a href="#">Home</a>
                  </li>
                  <li class="text-base text-gray-400">
                    <a href="#">About</a>
                  </li>
                  <li class="text-base text-gray-400">
                    <a href="#">Work</a>
                  </li>
                  <li class="text-base text-gray-400">
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <div
                class="social-icon flex items-center mt-8 text-gray-400 w-40 justify-around"
              >
                <div class="twitter">
                  <a href="#">
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                  </a>
                </div>
                <div class="instagram">
                  <a href="#">
                    <font-awesome-icon icon="fa-brands fa-square-behance" />
                  </a>
                </div>
                <div class="facebook">
                  <a href="#">
                    <font-awesome-icon icon="fa-brands fa-facebook" />
                  </a>
                </div>
                <div class="dev">
                  <a href="#">
                    <font-awesome-icon icon="fa-brands fa-dev" />
                  </a>
                </div>
              </div>
              <p class="mt-9 text-sm text-gray-500">All right reserve ©2023</p>
            </footer>
          </div>
        </div>
        <div class="toolbar">
          <editFooter v-on:card-values="getCardValue($event)" />
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
.input {
  flex-basis: 60%;
}
.toolbar {
  flex: 1 1 27%;
}
</style>
