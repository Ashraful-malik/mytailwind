<template>
  <div class="popup">
    <div class="popup-inner bg-red-600s">
      <div
        class="flex items-center justify-between text-center bg-gray-900 mb-2 p-2 rounded-tr-xl rounded-tl-xl"
      >
        <p class="text-sm ml-2 text-gray-300 font-medium">
          Choose border Color
        </p>
        <p
          class="text-lg mr-2 text-red-600 cursor-pointer px-2 rounded-lg hover:bg-red-300"
          @click="borderColorPopup()"
        >
          &#10005;
        </p>
      </div>

      <div class="flex items-center flex-wrap gap-4 p-4">
        <div
          class="color"
          v-for="(colors, index) in namesArray"
          :key="index"
          @click="getValue(colors.color), borderColorPopup()"
        >
          <div
            class="px-4 py-3 rounded-md cursor-pointer border"
            :class="colors.color"
          ></div>
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

  props: ["borderColorPopup", "names-array"],

  methods: {
    getValue(value) {
      this.$emit("popup-value", value);
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
  width: 40rem;
  border-radius: 12px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 0;
}
</style>
