<template>
  <div>
    <div class="overflow-hidden example">
      <ComponentNavbar />
      <div class="flex flex-row bg-gray-50 container_height">
        <div class="sidebar">
          <Sidebar />
        </div>

        <div class="button relative">
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
          <div
            class="flex items-center justify-center max-w-4xl w-4/5 m-auto h-96"
          >
            <!-- Button is start form here -->
            <button
              :class="[
                value.font_size,
                value.font_width,
                value.border_radius,
                value.padding_x,
                value.padding_y,
                value.background_color,
                value.text_color,
                value.box_shadow,
              ]"
            >
              {{ value.button_text }}
            </button>
          </div>
        </div>
        <div class="toolbar">
          <editButton v-on:button-value="getButtonValue($event)" />
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
    getButtonValue(values) {
      this.value = values;
    },

    // copy codes
    async copyCode(value) {
      try {
        const code = `
        <button
              class="
               ${value.font_size}
               ${value.font_width}
               ${value.border_radius}
               ${value.padding_x}
               ${value.padding_y}
               ${value.background_color}
               ${value.text_color}
               ${value.box_shadow}
              "
            >
              ${value.button_text}
            </button>
        
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
.flex .sidebar {
  flex: 1 1 13%;
}
.flex .button {
  flex-basis: 60%;
}
.flex .toolbar {
  flex: 1 1 27%;
}
.container_height {
  height: 36.7rem;
}
</style>
