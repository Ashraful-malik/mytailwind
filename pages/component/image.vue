<template>
  <div>
    <div class="overflow-hidden">
      <ComponentNavbar />
      <div class="flex flex-row bg-gray-50">
        <div class="sidebar">
          <Sidebar />
        </div>
        <div class="images">
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
    };
  },
  methods: {
    getImageValue(values) {
      this.value = values;
    },
  },
};
</script>

<style scoped>
.sidebar {
  flex: 1 1 13%;
}
.images {
  flex-basis: 60%;
}
.toolbar {
  flex: 1 1 27%;
}
</style>
