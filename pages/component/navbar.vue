<template>
  <div>
    <div class="">
      <ComponentNavbar />
      <div class="flex flex-row bg-gray-50 container_height overflow-hidden">
        <div class="sidebar">
          <Sidebar />
        </div>
        <div class="navbar relative p-5 overflow-scroll" id="custom_scrollbar">
          <div class="copy_button m-3 absolute right-0">
            <button
              class="px-4 py-1 text-white font-medium text-base rounded-full"
              @click="copyCode(value)"
              :class="[isCopy ? 'bg-green-400' : 'bg-blue-400']"
            >
              <p class="mr-2">
                {{ isCopy ? "Copied!" : "Copy code" }}
                <font-awesome-icon icon="fa-bold fa-copy" />
              </p>
            </button>
          </div>
          <!-- copy button end -->
          <div class="flex items-center justify-center m-2 h-80">
            <nav
              class="flex items-center"
              :class="[
                value.background_color,
                value.width,
                value.height,
                value.justify_spacing,
                value.padding,
              ]"
            >
              <div class="logo mr-4">
                <p class="text-xl font-bold" :class="value.text_color">
                  Mytailwind
                </p>
              </div>
              <div class="links">
                <ul class="flex items-center">
                  <li
                    class="cursor-pointer"
                    :class="[
                      value.text_color,
                      value.font_size,
                      value.font_width,
                    ]"
                  >
                    Home
                  </li>
                  <!-- divider -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-slash w-5 h-5"
                    viewBox="0 0 16 16"
                    :class="[value.margin_x, value.text_color]"
                  >
                    <path
                      d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                  <li
                    class="cursor-pointer"
                    :class="[
                      value.text_color,
                      value.font_size,
                      value.font_width,
                    ]"
                  >
                    About
                  </li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-slash-lg w-5 h-5"
                    viewBox="0 0 16 16"
                    :class="[value.margin_x, value.text_color]"
                  >
                    <path
                      d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                  <li
                    class="cursor-pointer"
                    :class="[
                      value.text_color,
                      value.font_size,
                      value.font_width,
                    ]"
                  >
                    Service
                  </li>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-slash-lg w-5 h-5"
                    viewBox="0 0 16 16"
                    :class="[value.margin_x, value.text_color]"
                  >
                    <path
                      d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
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
      isCopy: false,
    };
  },
  methods: {
    getNavbarValues(values) {
      this.value = values;
    },

    // copy codes
    async copyCode(value) {
      try {
        const code = `
        <nav
              class="
                 flex items-center
                ${value.background_color}
                ${value.width}
                ${value.height}
                ${value.justify_spacing}
                ${value.padding}"
            >
            <div class="logo mr-4">
                <p class="text-xl font-bold  ${value.text_color}">Mytailwind</p>
              </div>
              <div class="links">
                <ul class="flex items-center">
                  <li
                    class="
                      cursor-pointer
                      ${value.text_color}
                      ${value.font_size}
                      ${value.font_width}
                    
                    ">
                    Home
                  </li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-slash w-5 h-5  ${value.margin_x} ${value.text_color}"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                  <li
                    class="
                      cursor-pointer
                      ${value.text_color}
                      ${value.font_size}
                      ${value.font_width}
                     
                    "
                  >
                    About
                  </li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-slash-lg w-5 h-5  ${value.margin_x} ${value.text_color}"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                  <li
                    class="
                     cursor-pointer
                      ${value.text_color}
                      ${value.font_size}
                      ${value.font_width}
                     
                    "
                  >
                    Service
                  </li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-slash-lg w-5 h-5  ${value.margin_x} ${value.text_color}"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                  <li
                    class="
                      cursor-pointer
                      ${value.text_color}
                      ${value.font_size}
                      ${value.font_width}
                    "
                  >
                    ContactUs
                  </li>
                </ul>
              </div>
            </nav>
        
        `;
        await navigator.clipboard.writeText(code);
        this.isCopy = true;

        // setting timer so that copy text automatically  change its text after few seconds.
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
/* .container_height {
  height: 36.7rem;
} */
.sidebar {
  flex: 1 1 13%;
}
.navbar {
  flex-basis: 60%;
}
.toolbar {
  flex: 1 1 27%;
}
</style>
