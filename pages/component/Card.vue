<template>
  <div>
    <div class="overflow-hidden">
      <ComponentNavbar />
      <div class="flex flex-row bg-gray-50 container_height">
        <div class="sidebar">
          <Sidebar />
        </div>
        <div class="card_container relative">
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

          <div class="flex items-center justify-center p-4 w-full h-4/5">
            <!-- card start from here -->
            <div
              class="card"
              :class="[
                value.background_color,
                value.border_color,
                value.border_width,
                value.box_shadow,
                value.width,
                value.border_radius,
              ]"
            >
              <div class="card-img w-full h-48">
                <img
                  :src="value.image_link"
                  alt="card image"
                  class="w-full overflow-hidden h-full object-cover object-top"
                  :class="value.img_border_radius"
                />
              </div>
              <div
                class="content-container"
                :class="[value.padding, value.padding_top]"
              >
                <div class="heading">
                  <p
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
                    :class="[value.card_content_color, value.padding_bottom]"
                  >
                    {{ value.card_content_text }}
                  </p>
                </div>
                <div
                  class="pb-3 pt-3 flex items-center justify-end cursor-pointer"
                >
                  <p
                    class="text-base cursor-pointer font-medium"
                    :class="[value.button_color]"
                  >
                    {{ value.button_text }}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="bi bi-arrow-right-short w-7 h-7"
                    fill="currentColor"
                    :class="[value.button_color]"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
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
      isCopy: false,
    };
  },
  methods: {
    getCardValue(values) {
      this.value = values;
    },
    // copy codes
    async copyCode(value) {
      try {
        const code = `
        <div
              class="
                card
                ${value.background_color}
                ${value.border_color}
                ${value.border_width}
                ${value.box_shadow}
                ${value.width}
                ${value.border_radius}
              "
            >
              <div class="card-img w-full h-48">
                <img
                  src="${value.image_link}"
                  alt="card image"
                  class="${value.img_border_radius} w-full overflow-hidden h-full object-cover object-top"
                />
              </div>
              <div
                class="content-container ${value.padding} ${value.padding_top} "
              >
                <div class="heading">
                  <p
                    class="${value.text_color} ${value.font_size} ${value.font_width}
                    "
                  >
                    ${value.title_text}
                  </p>
                </div>
                <div class="sub-heading">
                  <p
                    class="${value.subtitle_color} text-sm tracking-normal"
                  >
                    ${value.subtitle_text}
                  </p>
                </div>
                <div class="pt-3 w-full overflow-hidden">
                  <p
                    class="
                     leading-6 text-base font-regular
                      ${value.card_content_color} ${value.padding_bottom}
                    "
                  >
                    ${value.card_content_text}
                  </p>
                </div>
                <div class="pb-3 pt-3 flex items-center justify-end cursor-pointer">
                  <p    
                    class="text-base cursor-pointer font-medium ${value.button_color}"
                  >
                    ${value.button_text}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="bi bi-arrow-right-short w-7 h-7 ${value.button_color}"
                    fill="currentColor"
                    
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </div>
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
