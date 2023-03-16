<template>
  <div class="popup">
    <div v-if="TextPopup">
      <div class="popup-inner bg-red-600s">
        <div
          class="flex items-center justify-between text-center bg-gray-900 mb-2 p-2 rounded-tr-xl rounded-tl-xl"
        >
          <p class="text-sm ml-2 text-gray-300 font-medium">Choose Color</p>

          <p
            class="text-lg mr-2 text-red-600 cursor-pointer px-2 rounded-lg hover:bg-red-300"
            @click="TextPopup()"
          >
            <span> &#10005; </span>
          </p>
        </div>

        <div class="flex items-center flex-wrap gap-4 p-4">
          <div
            class="color"
            v-for="(colors, index) in textColor"
            :key="index"
            @click="
              getValue(colors.value);
              TextPopup();
            "
          >
            <div
              class="p-3 rounded-full cursor-pointer border border-gray-600"
              :class="colors.color"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="CardContentPopup">
      <div class="popup-inner bg-red-600s">
        <div
          class="flex items-center justify-between text-center bg-gray-900 mb-2 p-2 rounded-tr-xl rounded-tl-xl"
        >
          <p class="text-sm ml-2 text-gray-300 font-medium">Choose Color</p>

          <p
            class="text-lg mr-2 text-red-600 cursor-pointer px-2 rounded-lg hover:bg-red-300"
            @click="CardContentPopup()"
          >
            <span> &#10005; </span>
          </p>
        </div>

        <div class="flex items-center flex-wrap gap-4 p-4">
          <div
            class="color"
            v-for="(colors, index) in textColor"
            :key="index"
            @click="[CardContentPopup(), getCardContentColor(colors.value)]"
          >
            <div
              class="p-3 rounded-full cursor-pointer border border-gray-600"
              :class="colors.color"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="subTitlePopup">
      <div class="popup-inner bg-red-600s">
        <div
          class="flex items-center justify-between text-center bg-gray-900 mb-2 p-2 rounded-tr-xl rounded-tl-xl"
        >
          <p class="text-sm ml-2 text-gray-300 font-medium">Choose Color</p>

          <p
            class="text-lg mr-2 text-red-600 cursor-pointer px-2 rounded-lg hover:bg-red-300"
            @click="subTitlePopup()"
          >
            <span> &#10005; </span>
          </p>
        </div>

        <div class="flex items-center flex-wrap gap-4 p-4">
          <div
            class="color"
            v-for="(colors, index) in textColor"
            :key="index"
            @click="[subTitlePopup(), getSubtitleColor(colors.value)]"
          >
            <div
              class="p-3 rounded-full cursor-pointer border border-gray-600"
              :class="colors.color"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="buttonColorPopup">
      <div class="popup-inner bg-red-600s">
        <div
          class="flex items-center justify-between text-center bg-gray-900 mb-2 p-2 rounded-tr-xl rounded-tl-xl"
        >
          <p class="text-sm ml-2 text-gray-300 font-medium">Choose Color</p>

          <p
            class="text-lg mr-2 text-red-600 cursor-pointer px-2 rounded-lg hover:bg-red-300"
            @click="buttonColorPopup()"
          >
            <span> &#10005; </span>
          </p>
        </div>

        <div class="flex items-center flex-wrap gap-4 p-4">
          <div
            class="color"
            v-for="(colors, index) in textColor"
            :key="index"
            @click="[buttonColorPopup(), getButtonColor(colors.value)]"
          >
            <div
              class="p-3 rounded-full cursor-pointer border border-gray-600"
              :class="colors.color"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="buttonTextColorPopup">
      <div class="popup-inner bg-red-600s">
        <div
          class="flex items-center justify-between text-center bg-gray-900 mb-2 p-2 rounded-tr-xl rounded-tl-xl"
        >
          <p class="text-sm ml-2 text-gray-300 font-medium">Choose Color</p>

          <p
            class="text-lg mr-2 text-red-600 cursor-pointer px-2 rounded-lg hover:bg-red-300"
            @click="buttonTextColorPopup()"
          >
            <span> &#10005; </span>
          </p>
        </div>

        <div class="flex items-center flex-wrap gap-4 p-4">
          <div
            class="color"
            v-for="(colors, index) in textColor"
            :key="index"
            @click="[buttonTextColorPopup(), getButtonTextColor(colors.value)]"
          >
            <div
              class="p-3 rounded-full cursor-pointer border border-gray-600"
              :class="colors.color"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
    };
  },

  props: [
    "TextPopup",
    "text-color", // we are getting text color
    "CardContentPopup",
    "subTitlePopup",
    "buttonColorPopup",
    "hoverTextPopup",
    "buttonTextColorPopup",
  ],

  methods: {
    getValue(value) {
      this.$emit("popup-value", value);
    },
    getCardContentColor(value) {
      this.$emit("card-content-color", value);
    },
    getSubtitleColor(value) {
      this.$emit("subtitle-color", value);
    },
    getButtonColor(value) {
      this.$emit("button-color", value);
    },
    getHoverTextColor(value) {
      this.$emit("hover-text-color", value);
    },
    getButtonTextColor(value) {
      this.$emit("button-text-color", value);
    },
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
}
.popup-inner {
  background: #1f2937;
  width: 30rem;
  border-radius: 12px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 0;
}
</style>
