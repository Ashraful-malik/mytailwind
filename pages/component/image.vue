<template>
  <div>
    <div class="overflow-hidden">
      <ComponentNavbar />
      <div class="flex flex-row bg-gray-50 container_height">
        <div class="sidebar">
          <Sidebar />
        </div>
        <div class="image_container relative">
          <!-- Copy Button Start-->
          <div class="copy_button m-3 absolute right-0">
            <button
              class="px-4 py-1 text-white font-medium text-base rounded-full flex items-center"
              @click="copyCode(value)"
              :class="[isCopy ? 'bg-green-400' : 'bg-blue-400']"
            >
              <p class="mr-2">{{ isCopy ? "Copied!" : "Copy code" }}</p>
              <font-awesome-icon icon="fa-solid fa-code" />
            </button>
          </div>
          <!-- copy button end -->
          <div class="flex items-center justify-center p-4 w-full h-4/5">
            <!-- image component start -->
            <div
              class="image"
              :class="[
                value.width,
                value.height,
                value.box_shadow,
                value.border_radius,
                value.border_width,
                value.border_color,
                value.padding,
              ]"
            >
              <img
                :src="value.image_link"
                alt="image "
                class="w-full h-full object-cover object-top"
                :class="[value.border_radius]"
              />
            </div>
          </div>
        </div>
        <div class="toolbar">
          <editImage v-on:image-values="getImageValue($event)" />
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
    getImageValue(values) {
      this.value = values;
    },

    async copyCode(value) {
      try {
        const code = `
        <div class="image ${value.width} ${value.height} ${value.box_shadow} ${value.border_radius} ${value.border_width} ${value.border_color} ${value.padding}">
              <img
                src="${value.image_link}"
                alt="image"
                class="w-full h-full object-cover object-top ${value.border_radius}"
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
.image_container {
  flex-basis: 60%;
}
.toolbar {
  flex: 1 1 27%;
}
.container_height {
  height: 36.7rem;
}
</style>
