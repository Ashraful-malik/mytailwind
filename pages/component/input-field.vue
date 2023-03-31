<template>
  <div>
    <div class="overflow-hidden">
      <ComponentNavbar />
      <div class="flex flex-row bg-gray-50 container_height">
        <div class="sidebar">
          <Sidebar />
        </div>
        <div class="input relative">
          <!-- Copy Button Start-->
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
          <div class="flex items-center justify-center pl-4 w-full h-4/5">
            <div class="input-field">
              <input
                type="text"
                class="focus:outline-none focus:ring focus:border-blue-400 pl-3"
                placeholder="Default input"
                :class="[
                  `placeholder-${value.placeholder_color}`,
                  value.width,
                  value.height,
                  value.border_radius,
                  value.text_color,
                  value.background_color,
                  value.border_width,
                  value.border_color,
                  value.font_size,
                  value.font_width,
                  value.box_shadow,
                  value.padding,
                ]"
              />
            </div>
          </div>
        </div>
        <div class="toolbar">
          <editInputField
            v-on:input-field-values="getInputFieldValue($event)"
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
      isCopy: false,
    };
  },
  methods: {
    getInputFieldValue(values) {
      this.value = values;
    },
    // copy codes
    async copyCode(value) {
      try {
        const code = `
        <div class="input-field">
              <input
                type="text"
                class="focus:outline-none focus:ring focus:border-blue-400 pl-3 placeholder-${value.placeholder_color} ${value.width} ${value.height}
                 ${value.border_radius} ${value.text_color} ${value.background_color}
                 ${value.border_width} ${value.border_color} ${value.padding} ${value.font_size} 
                 ${value.font_width} ${value.box_shadow}"
                placeholder="Default input" 
              />
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
.input {
  flex-basis: 60%;
}
.toolbar {
  flex: 1 1 27%;
}
</style>
