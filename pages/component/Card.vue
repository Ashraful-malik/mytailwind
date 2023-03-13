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
              class="w-72 card"
              :class="[
                border_radius,
                value.background_color,
                value.border_color,
                border_width,
                box_shadow,
                value.width,
              ]"
            >
              <div class="card-img w-full h-48">
                <img
                  :src="image_link"
                  alt="card image"
                  class="w-full overflow-hidden h-full object-cover object-top"
                  :class="`rounded-t-${[border_radius_value]}`"
                />
              </div>
              <div
                class="content-container p-4 pt-5"
                :class="[padding, padding_top]"
              >
                <div class="heading">
                  <p
                    class=""
                    :class="[value.text_color, font_size, font_width]"
                  >
                    {{ title }}
                  </p>
                </div>
                <div class="sub-heading">
                  <p
                    class="text-sm tracking-normal"
                    :class="value.subtitle_color"
                  >
                    {{ subtitle }}
                  </p>
                </div>
                <div class="pt-3 w-full overflow-hidden">
                  <p
                    class="leading-6 text-base font-regular"
                    :class="[
                      card_content_color,
                      value.card_content_color,
                      value.padding_bottom,
                    ]"
                  >
                    {{ card_content }}
                  </p>
                </div>
                <div class="pb-3 pt-3 flex items-center justify-end">
                  <p
                    class="text-base cursor-pointer font-medium"
                    :class="[button_color, value.button_color]"
                  >
                    {{ button_text }}
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
import Toolsbar from "../../components/Toolsbar.vue";

export default {
  data() {
    return {
      value: "",
      button_text: "Read more",
      image_link:
        "https://images.unsplash.com/photo-1677206213866-65b5f73bb95b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Welcome 2023",
      subtitle: "15-02-2023",
      card_content:
        "2023 is the current year, and is a common year starting on Sunday.",
      card_content_color: "text-gray-700",
      background_color: "bg-gray-50",
      border_radius: "",
      font_size: "text-2xl",
      font_width: "font-bold",
      box_shadow: "shadow-md",
      width: "",
      height: "",
      padding: "",
      padding_top: "",
      padding_bottom: "",
      padding_left: "",
      padding_right: "",
      border_color: "",
      border_width: "",
      border_radius_value: "",
      button_color: "text-blue-700",
    };
  },
  components: { Toolsbar },
  methods: {
    getCardValue(values) {
      this.value = values;
      this.button_text = values.button_text;
      this.image_link = values.image_link;
      this.title = values.title_text;
      this.subtitle = values.subtitle_text;
      this.card_content = values.card_content_text;
      this.text_color = values.text_color;
      this.card_content_color = values.card_content_color;
      this.background_color = values.background_color;
      this.border_radius = values.border_radius.value;
      this.border_radius_value = values.border_radius.radius_value;
      this.font_size = values.font_size;
      this.font_width = values.font_width;
      this.box_shadow = values.box_shadow;
      this.width = values.width;
      this.height = values.height;
      this.padding = values.padding;
      this.padding_top = values.padding_top;
      this.padding_bottom = values.padding_bottom;
      this.padding_left = values.padding_left;
      this.padding_right = values.padding_right;
      this.border_color = values.border_color;
      this.border_width = values.border_width;
      this.button_color = values.button_color;
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
