<template>
  <div>
    <div class="overflow-hidden">
      <ComponentNavbar />
      <div class="flex flex-row bg-gray-50">
        <div class="sidebar">
          <Sidebar />
        </div>
        <div class="card_container">
          <div class="flex items-center justify-center p-4 w-full h-4/5">
            <!-- card start from here -->
            <div
              class="card"
              :class="[
                border_radius,
                value.background_color,
                value.border_color,
                value.border_width,
                value.box_shadow,
                value.width,
              ]"
            >
              <div class="card-img w-full h-48">
                <img
                  :src="value.image_link"
                  alt="card image"
                  class="w-full overflow-hidden h-full object-cover object-top"
                  :class="`rounded-t-${[border_radius_value]}`"
                />
              </div>
              <div
                class="content-container"
                :class="[value.padding, value.padding_top]"
              >
                <div class="heading">
                  <p
                    class=""
                    :class="[
                      value.text_color,
                      value.font_size,
                      value.font_width,
                    ]"
                  >
                    {{ value.title_text }}
                  </p>
                </div>
                <div class="sub-heading">
                  <p
                    class="text-sm tracking-normal"
                    :class="value.subtitle_color"
                  >
                    {{ value.subtitle_text }}
                  </p>
                </div>
                <div class="pt-3 w-full overflow-hidden">
                  <p
                    class="leading-6 text-base font-regular"
                    :class="[
                      value.card_content_color,
                      value.card_content_color,
                      value.padding_bottom,
                    ]"
                  >
                    {{ value.card_content_text }}
                  </p>
                </div>
                <div class="pb-3 pt-3 flex items-center justify-end">
                  <p
                    class="text-base cursor-pointer font-medium"
                    :class="[value.button_color]"
                  >
                    {{ value.button_text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="toolbar">
          <editCard v-on:card-values="getCardValue($event)" />
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
      border_radius: "",
      border_radius_value: "",
    };
  },
  methods: {
    getCardValue(values) {
      this.value = values;
      this.border_radius = values.border_radius.value;
      this.border_radius_value = values.border_radius.radius_value;
    },
  },
};
</script>

<style scoped>
.flex .sidebar {
  flex: 1 1 13%;
}
.flex .card_container {
  flex-basis: 60%;
}
.flex .toolbar {
  flex: 1 1 27%;
}
</style>
