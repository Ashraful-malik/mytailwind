<template>
  <div>
    <div class="overflow-hidden">
      <ComponentNavbar />
      <div class="flex flex-row bg-gray-50 container_height">
        <div class="sidebar">
          <Sidebar />
        </div>
        <div class="footer_container relative">
          <!-- Copy Button Start-->
          <div class="copy_button m-3 absolute right-0">
            <button
              class="px-4 py-1 text-white font-medium text-base rounded-full flex items-center"
              @click="copyCode(value)"
              :class="[isCopy ? 'bg-green-400' : 'bg-blue-400']"
            >
              <p class="mr-2">{{ isCopy ? "Copied" : "Copy code" }}</p>
              <font-awesome-icon icon="fa-solid fa-code" />
            </button>
          </div>
          <!-- copy button end -->
          <div class="flex items-center justify-center p-4 w-full h-4/5">
            <footer
              class="footer-container w-full flex items-center justify-center p-4 flex-col"
              :class="[
                value.background_color,
                value.border_radius,
                value.height,
              ]"
            >
              <div class="logo flex items-center">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="logo"
                  class="w-9 rounded-full"
                />
                <p class="text-lg font-semibold text-white ml-2">Mylogo</p>
              </div>
              <div class="links" :class="[value.width, value.margin_top]">
                <ul class="flex items-end justify-between">
                  <li
                    :class="[
                      value.text_color,
                      value.font_size,
                      value.font_width,
                    ]"
                  >
                    <a href="#">Home</a>
                  </li>
                  <li
                    :class="[
                      value.text_color,
                      value.font_size,
                      value.font_width,
                    ]"
                  >
                    <a href="#">About</a>
                  </li>
                  <li
                    :class="[
                      value.text_color,
                      value.font_size,
                      value.font_width,
                    ]"
                  >
                    <a href="#">Work</a>
                  </li>
                  <li
                    :class="[
                      value.text_color,
                      value.font_size,
                      value.font_width,
                    ]"
                  >
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <div
                class="social-icon flex items-center mt-8 w-40 justify-around"
                :class="value.icon_color"
              >
                <div class="twitter">
                  <a href="#">
                    <!-- Replace this icons with your icons -->
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                    <!--↑↑↑↑↑↑ Replace ↑↑↑↑↑↑-->
                  </a>
                </div>
                <div class="instagram">
                  <a href="#">
                    <!-- Replace this icons with your icons -->

                    <font-awesome-icon icon="fa-brands fa-square-behance" />
                    <!--↑↑↑↑↑↑ Replace ↑↑↑↑↑↑-->
                  </a>
                </div>
                <div class="facebook">
                  <a href="#">
                    <!-- Replace this icons with your icons -->
                    <font-awesome-icon icon="fa-brands fa-facebook" />
                    <!--↑↑↑↑↑↑ Replace ↑↑↑↑↑↑-->
                  </a>
                </div>
                <div class="dev">
                  <a href="#">
                    <!-- Replace this icons with your icons -->
                    <font-awesome-icon icon="fa-brands fa-dev" />
                    <!--↑↑↑↑↑↑ Replace ↑↑↑↑↑↑-->
                  </a>
                </div>
              </div>
              <p class="mt-9 text-sm text-gray-500">All right reserve ©2023</p>
            </footer>
          </div>
        </div>
        <div class="toolbar">
          <editFooter v-on:footer-values="getFooterValue($event)" />
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
      isCopy: false,
    };
  },
  methods: {
    getFooterValue(values) {
      this.value = values;
    },

    async copyCode(value) {
      try {
        const code = `
        <footer
              class="footer-container w-full flex items-center justify-center p-4 flex-col ${value.background_color} ${value.border_radius} ${value.height}">
              <div class="logo flex items-center">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="logo"
                  class="w-9 rounded-full"
                />
                <p class="text-lg font-semibold text-white ml-2">Mylogo</p>
              </div>
              <div class="links ${value.width} ${value.margin_top}">
                <ul class="flex items-end justify-between">
                  <li
                    class="
                      ${value.text_color}
                      ${value.font_size}
                      ${value.font_width}
                    "
                  >
                    <a href="#">Home</a>
                  </li>
                  <li
                    class="
                      ${value.text_color}
                      ${value.font_size}
                      ${value.font_width}
                    "
                  >
                    <a href="#">About</a>
                  </li>
                  <li
                    class="
                      ${value.text_color}
                      ${value.font_size}
                      ${value.font_width}
                    "
                  >
                    <a href="#">Work</a>
                  </li>
                  <li
                    class="
                      ${value.text_color}
                      ${value.font_size}
                      ${value.font_width}
                    "
                  >
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <div
                class="social-icon flex items-center mt-8 w-40 justify-around ${value.icon_color}"
              >
                <div class="twitter">
                  <a href="#">
                    <!-- Replace this icons with your icons -->
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                    <!--↑↑↑↑↑↑ Replace ↑↑↑↑↑↑-->
                  </a>
                </div>
                <div class="instagram">
                  <a href="#">
                    <!-- Replace this icons with your icons -->

                    <font-awesome-icon icon="fa-brands fa-square-behance" />
                    <!--↑↑↑↑↑↑ Replace ↑↑↑↑↑↑-->
                  </a>
                </div>
                <div class="facebook">
                  <a href="#">
                    <!-- Replace this icons with your icons -->
                    <font-awesome-icon icon="fa-brands fa-facebook" />
                    <!--↑↑↑↑↑↑ Replace ↑↑↑↑↑↑-->
                  </a>
                </div>
                <div class="dev">
                  <a href="#">
                    <!-- Replace this icons with your icons -->
                    <font-awesome-icon icon="fa-brands fa-dev" />
                    <!--↑↑↑↑↑↑ Replace ↑↑↑↑↑↑-->
                  </a>
                </div>
              </div>
              <p class="mt-9 text-sm text-gray-500">All right reserve ©2023</p>
            </footer>
        
        `;
        await navigator.clipboard.writeText(code);
        this.isCopy = true;
        // setting timer so that copy text automatically  change its text
        setTimeout(() => {
          this.isCopy = false;
        }, 2000);
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style scoped>
.sidebar {
  flex: 1 1 13%;
}
.footer_container {
  flex-basis: 60%;
}
.toolbar {
  flex: 1 1 27%;
}
.container_height {
  height: 36.7rem;
}
</style>
