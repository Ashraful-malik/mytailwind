<template>
  <div class="popup">
    <div>
      <div class="popup-inner bg-red-600s">
        <div
          class="flex items-center justify-between text-center bg-gray-900 mb-2 p-2 rounded-tr-xl rounded-tl-xl"
        >
          <p class="text-sm ml-2 text-gray-300 font-medium">Choose Color</p>

          <p
            class="text-lg mr-2 text-red-600 cursor-pointer px-2 rounded-lg hover:bg-red-300"
            @click="placeholderPopup()"
          >
            <span> &#10005; </span>
          </p>
        </div>

        <div class="flex items-center flex-wrap gap-4 p-4">
          <div
            class="color"
            v-for="(colors, index) in placeholderColor"
            :key="index"
            @click="
              getValue(colors.placeholderColor);
              placeholderPopup();
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
    "placeholderPopup",
    "placeholder-color", // we are getting text color
  ],

  methods: {
    getValue(value) {
      this.$emit("placeholder-value", value);
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
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px;

  padding: 0;
}
</style>
