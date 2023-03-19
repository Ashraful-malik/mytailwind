<template>
  <div>
    <div class="overflow-hidden">
      <ComponentNavbar />
      <div class="flex flex-row bg-gray-50 container_height">
        <div class="sidebar">
          <Sidebar />
        </div>
        <div class="alert relative overflow-scroll" id="custom_scrollbar">
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
            <!-- alert start -->
            <div
              class="alert-box h-12 flex items-center justify-between"
              :class="[
                value.background_color,
                value.border_width,
                value.border_color,
                value.border_radius,
                value.width,
                value.box_shadow,
              ]"
            >
              <div class="alert-content px-4 w-full">
                <p
                  :class="[value.text_color, value.font_width, value.font_size]"
                >
                  {{ value.alert_message }}
                </p>
              </div>
              <div
                class="close-icon mr-4 cursor-pointer"
                :class="[value.text_color]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-x-circle-fill w-5 h-5"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
                  />
                </svg>
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
      isCopy: false,
    };
  },
  methods: {
    getAlertValue(values) {
      this.value = values;
    },

    async copyCode(value) {
      try {
        const code = `
      <div class="alert-box h-12 flex items-center justify-between ${value.background_color} ${value.border_width} ${value.border_color} ${value.border_radius} ${value.width} ${value.box_shadow}">
              <div class="alert-content ml-4 w-full">
                <p
                  class="${value.text_color} ${value.font_width} ${value.font_size}">
                  ${value.alert_message}
                </p>
              </div>
              <div
                class="close-icon mr-4 cursor-pointer ${value.text_color}"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-x-circle-fill w-5 h-5"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
                  />
                </svg>
              </div>
            </div>
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
.alert {
  flex-basis: 60%;
}
.toolbar {
  flex: 1 1 27%;
}
.container_height {
  height: 36.7rem;
}
</style>
