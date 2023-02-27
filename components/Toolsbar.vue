<template>
  <div>
    <section class="bg-gray-800 pt-4 w-96">
      <!-- options container -->

      <div class="pl-4 h-screen horizontal-scroll overflow-y-auto">
        <!-- button text -->
        <p class="text-gray-200 text-sm font-semibold mb-2">Button text</p>
        <input
          type="text"
          maxlength="20"
          placeholder="Enter your button text"
          class="h-8 w-3/4 bg-gray-600 pl-2 text-gray-50 rounded"
          v-model="selected_values.button_text"
          v-on:input="sendChange"
        />

        <!-- text color -->
        <div class="text_color mt-6">
          <p class="text-sm font-medium mb-2 text-gray-200">Text color</p>
          <div class="flex gap-3 w-full flex-wrap text-sm mt-4 items-center">
            <div
              class="flex gap-3"
              v-for="textColor in selectTextColor"
              :key="textColor.id"
            >
              <div
                :class="textColor.color"
                class="color1 p-3 rounded-full cursor-pointer"
                @click="getTextColor(textColor.value)"
                v-on:click="sendChange"
              ></div>
            </div>
            <div class="color_selector flex items-center">
              <button
                type="button"
                value="1"
                class="bg-blue-500 px-3 py-1 text-white rounded-full flex items-center content-center text-center"
                @click="() => TogglePopup('buttonTrigger')"
                v-on:click="sendChange"
              >
                <unicon
                  name="plus"
                  fill="white"
                  width="20"
                  class="mr-2"
                ></unicon>
                <p class="text-center">More Colors</p>
              </button>

              <!-- sending data in popup component-->
              <textColorPopup
                v-if="popupTriggers.buttonTrigger"
                :TogglePopup="() => TogglePopup('buttonTrigger')"
                :names-array="colors"
                v-on:popup-value="getTextColor($event)"
              />
            </div>
          </div>
        </div>
        <!-- padding and margin -->

        <!-- padding -->
        <div class="padding mt-6 relative">
          <p class="text-sm font-medium text-gray-200">padding</p>

          <div class="flex flex-wrap gap-3 mt-4">
            <div class="padding">
              <p class="text-sm font-normal text-gray-400 mb-2">padding</p>
              <div class="w-32 text-xs">
                <v-select
                  label="countryName"
                  :options="padding"
                  v-model="selected_values.padding"
                  v-on:input="sendChange"
                  class="bg-gray-700"
                ></v-select>
              </div>
            </div>
            <div class="padding_top">
              <p class="text-sm font-normal text-gray-400 mb-2">p-top</p>
              <div class="w-32 text-xs">
                <v-select
                  label="countryName"
                  :options="padding_top"
                  v-model="selected_values.padding_top"
                  v-on:input="sendChange"
                  class="bg-gray-700"
                ></v-select>
              </div>
            </div>
            <div class="padding_bottom">
              <p class="text-sm font-normal text-gray-400 mb-2">p-bottom</p>
              <div class="w-32 text-xs">
                <v-select
                  label="countryName"
                  :options="padding_bottom"
                  v-model="selected_values.padding_bottom"
                  v-on:input="sendChange"
                ></v-select>
              </div>
            </div>

            <div class="padding_left">
              <p class="text-sm font-normal text-gray-400 mb-2">p-left</p>
              <div class="w-32 text-xs">
                <v-select
                  label="countryName"
                  :options="padding_left"
                  v-model="selected_values.padding_left"
                  v-on:input="sendChange"
                ></v-select>
              </div>
            </div>
            <div class="padding_right">
              <p class="text-sm font-normal text-gray-400 mb-2">p-right</p>
              <div class="w-32 text-xs">
                <v-select
                  label="countryName"
                  :options="padding_right"
                  v-model="selected_values.padding_right"
                  v-on:input="sendChange"
                ></v-select>
              </div>
            </div>
          </div>
        </div>

        <!-- margin -->
        <div class="margin mt-6">
          <p class="text-sm font-medium text-gray-200">Margin</p>
          <div class="flex flex-wrap gap-3 mt-4 items-center">
            <div class="margin">
              <p class="text-sm font-normal text-gray-400 mb-2">margin</p>
              <div class="w-32 text-xs">
                <v-select
                  label="countryName"
                  :options="margin"
                  v-model="selected_values.margin"
                  v-on:input="sendChange"
                ></v-select>
              </div>
            </div>
            <div class="margin_top">
              <p class="text-sm font-normal text-gray-400 mb-2">m-top</p>
              <div class="w-32 text-xs">
                <v-select
                  label="countryName"
                  :options="margin_top"
                  v-model="selected_values.margin_top"
                  v-on:input="sendChange"
                ></v-select>
              </div>
            </div>
            <div class="margin_bottom">
              <p class="text-sm font-normal text-gray-400 mb-2">m-bottom</p>
              <div class="w-32 text-xs">
                <v-select
                  label="countryName"
                  :options="margin_bottom"
                  v-model="selected_values.margin_bottom"
                  v-on:input="sendChange"
                ></v-select>
              </div>
            </div>
            <div class="margin_left">
              <p class="text-sm font-normal text-gray-400 mb-2">m-left</p>
              <div class="w-32 text-xs">
                <v-select
                  label="countryName"
                  :options="margin_left"
                  v-model="selected_values.margin_left"
                  v-on:input="sendChange"
                ></v-select>
              </div>
            </div>
            <div class="margin_right">
              <p class="text-sm font-normal text-gray-400 mb-2">m-right</p>
              <div class="w-32 text-xs">
                <v-select
                  label="countryName"
                  :options="margin_right"
                  v-model="selected_values.margin_right"
                  v-on:input="sendChange"
                ></v-select>
              </div>
            </div>
          </div>
        </div>

        <!-- Background color -->
        <div class="background_color mt-6">
          <p class="text-sm font-medium mb-2 text-gray-200">Background color</p>
          <div class="flex gap-3 w-full flex-wrap text-sm mt-4 items-center">
            <div
              class="flex gap-3"
              v-for="backgroundColor in selectBackgroundColor"
              :key="backgroundColor.id"
            >
              <div
                :class="backgroundColor.color"
                class="p-3 rounded-full cursor-pointer border-gray-400"
                @click="getBackgroundColor(backgroundColor.color)"
                v-on:click="sendChange"
              ></div>
            </div>
            <div class="color_selector flex items-center">
              <button
                type="button"
                value="1"
                class="bg-blue-500 px-3 py-1 text-white rounded-full flex items-center content-center text-center"
                @click="() => bgPopup('bgColorTrigger')"
                v-on:click="sendChange"
              >
                <unicon
                  name="plus"
                  fill="white"
                  width="20"
                  class="mr-2"
                ></unicon>
                <p class="text-center">More Colors</p>
              </button>

              <!-- sending data in bgColor popup component-->
              <bgColorPopup
                v-if="popupTriggers.bgColorTrigger"
                :bgPopup="() => bgPopup('bgColorTrigger')"
                :background-color="colors"
                v-on:popup-value="getBackgroundColor($event)"
              />
            </div>
          </div>
        </div>
        <!-- border radius -->
        <div class="border_radius mt-6">
          <p class="text-sm font-medium mb-2 text-gray-200">Border radius</p>
          <div class="flex gap-3 w-full flex-wrap text-sm mt-4 items-center">
            <div
              v-for="borderRadius in selectBorderRadius"
              :key="borderRadius.id"
            >
              <div
                class="px-3 py-1 text-center border cursor-pointer border-blue-500 rounded-md bg-gray-700"
                @click="getBorderRadius(borderRadius.value)"
              >
                <p class="text-white">{{ borderRadius.value }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Font size -->
        <div class="font_size mt-6">
          <p class="text-sm font-medium mb-2 text-gray-200">Font Size</p>
          <div class="flex gap-3 w-full flex-wrap text-sm mt-4 items-center">
            <div v-for="fontSize in selectFountSize" :key="fontSize.id">
              <div
                :class="fontSize.value"
                class="p-2 border border-blue-400 text-gray-50 rounded-lg text-sm cursor-pointer"
                @click="getFontSize(fontSize.value)"
                v-on:click="sendChange"
              >
                {{ fontSize.text }}
              </div>
            </div>
          </div>
        </div>
        <!-- Font weight -->
        <div class="font_weight mt-6">
          <p class="text-sm font-medium mb-2 text-gray-200">Font Weight</p>
          <div class="flex gap-3 w-full flex-wrap text-sm mt-4 items-center">
            <div v-for="fontWeight in selectFountWeight" :key="fontWeight.id">
              <div
                :class="fontWeight.value"
                class="p-2 border border-blue-400 text-gray-50 rounded-lg text-xl font-light cursor-pointer"
                @click="getFontWeight(fontWeight.value)"
              >
                {{ fontWeight.text }}
              </div>
            </div>
          </div>
        </div>
        <!-- box shadow -->
        <div class="box_shadow mt-6">
          <p class="text-sm font-medium mb-2 text-gray-200">Box shadow</p>
          <div class="flex gap-3 w-full flex-wrap text-sm mt-4 items-center">
            <div v-for="boxShadow in selectBoxShadow" :key="boxShadow.id">
              <div
                class="rounded-md w-10 h-10 bg-gray-200 cursor-pointer"
                @click="getBoxShadow(boxShadow.value)"
                :class="boxShadow.value"
              ></div>
            </div>
          </div>
        </div>

        <div class="mb-4"></div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["value"],
  setup() {
    const popupTriggers = ref({
      buttonTrigger: false,
      bgColorTrigger: false,
    });
    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };
    const bgPopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };

    return {
      popupTriggers,
      TogglePopup,
      bgPopup,
    };
  },
  data() {
    return {
      // dropdown selected value

      selected_values: {
        button_text: "Create account",
        text_color: "",
        padding: "",
        padding_top: "",
        padding_bottom: "",
        padding_left: "",
        padding_right: "",
        margin: "",
        margin_top: "",
        margin_bottom: "",
        margin_left: "",
        margin_right: "",
        background_color: "",
        border_radius: "",
        font_size: "",
        font_width: "",
        box_shadow: "",
      },

      selectTextColor: [
        { color: "bg-red-500", id: 1, value: "text-red-500" },
        { color: "bg-white", id: 2, value: "text-white" },
        { color: "bg-blue-600", id: 3, value: "text-blue-600" },
        { color: "bg-yellow-400", id: 4, value: "text-yellow-400" },
        { color: "bg-green-500", id: 5, value: "text-green-500" },
      ],
      selectBackgroundColor: [
        { color: "bg-indigo-500", id: 1 },
        { color: "bg-white", id: 2 },
        { color: "bg-gray-900", id: 3 },
        { color: "bg-yellow-400", id: 4 },
        { color: "bg-green-500", id: 5 },
      ],

      selectBorderRadius: [
        { value: "rounded-none", id: 1 },
        { value: "rounded", id: 2 },
        { value: "rounded-md", id: 4 },
        { value: "rounded-xl", id: 3 },
        { value: "rounded-full", id: 4 },
      ],
      selectFountSize: [
        { text: "Aa", value: "text-sm", id: 1 },
        { text: "Aa", value: "text-base", id: 2 },
        { text: "Aa", value: "text-lg", id: 3 },
        { text: "Aa", value: "text-xl", id: 4 },
        { text: "Aa", value: "text-2xl", id: 5 },
      ],
      selectFountWeight: [
        { text: "Aa", value: "font-light", id: 1 },
        { text: "Aa", value: "font-normal", id: 2 },
        { text: "Aa", value: "font-medium", id: 3 },
        { text: "Aa", value: "font-semibold", id: 4 },
        { text: "Aa", value: "font-bold", id: 5 },
      ],
      selectBoxShadow: [
        { value: "shadow-none", id: 1 },
        { value: "shadow-md", id: 2 },
        { value: "shadow-lg", id: 3 },
        { value: "shadow-xl", id: 4 },
        { value: "shadow-2xl", id: 5 },
      ],

      //Text color
      colors: [
        { color: "bg-current", value: "text-current", id: 1 },
        { color: "bg-white", value: "text-white", id: 2 },
        { color: "bg-black", value: "text-black", id: 3 },
        { color: "bg-gray-400", value: "text-gray-400", id: 4 },
        { color: "bg-gray-500", value: "text-gray-500", id: 5 },
        { color: "bg-gray-600", value: "text-gray-600", id: 6 },
        { color: "bg-gray-700", value: "text-gray-700", id: 7 },
        { color: "bg-gray-800", value: "text-gray-800", id: 8 },
        { color: "bg-gray-900", value: "text-gray-900", id: 9 },
        { color: "bg-red-100", value: "text-red-100", id: 10 },
        { color: "bg-red-200", value: "text-red-200", id: 11 },
        { color: "bg-red-300", value: "text-red-300", id: 12 },
        { color: "bg-red-400", value: "text-red-400", id: 13 },
        { color: "bg-red-500", value: "text-red-500", id: 14 },
        { color: "bg-red-600", value: "text-red-600", id: 15 },
        { color: "bg-red-700", value: "text-red-700", id: 16 },
        { color: "bg-red-800", value: "text-red-800", id: 17 },
        { color: "bg-red-900", value: "text-red-900", id: 18 },
        { color: "bg-yellow-100", value: "text-yellow-100", id: 28 },
        { color: "bg-yellow-200", value: "text-yellow-200", id: 29 },
        { color: "bg-yellow-300", value: "text-yellow-300", id: 30 },
        { color: "bg-yellow-400", value: "text-yellow-400", id: 31 },
        { color: "bg-yellow-500", value: "text-yellow-500", id: 32 },
        { color: "bg-yellow-600", value: "text-yellow-600", id: 33 },
        { color: "bg-yellow-700", value: "text-yellow-700", id: 34 },
        { color: "bg-yellow-800", value: "text-yellow-800", id: 35 },
        { color: "bg-yellow-900", value: "text-yellow-900", id: 36 },
        { color: "bg-green-100", value: "text-green-100", id: 37 },
        { color: "bg-green-200", value: "text-green-200", id: 38 },
        { color: "bg-green-300", value: "text-green-300", id: 39 },
        { color: "bg-green-400", value: "text-green-400", id: 40 },
        { color: "bg-green-500", value: "text-green-500", id: 41 },
        { color: "bg-green-600", value: "text-green-600", id: 42 },
        { color: "bg-green-700", value: "text-green-700", id: 43 },
        { color: "bg-green-800", value: "text-green-800", id: 44 },
        { color: "bg-green-900", value: "text-green-900", id: 45 },
        { color: "bg-blue-100", value: "text-blue-100", id: 55 },
        { color: "bg-blue-200", value: "text-blue-200", id: 56 },
        { color: "bg-blue-300", value: "text-blue-300", id: 57 },
        { color: "bg-blue-400", value: "text-blue-400", id: 58 },
        { color: "bg-blue-500", value: "text-blue-500", id: 59 },
        { color: "bg-blue-600", value: "text-blue-600", id: 60 },
        { color: "bg-blue-700", value: "text-blue-700", id: 61 },
        { color: "bg-blue-800", value: "text-blue-800", id: 62 },
        { color: "bg-blue-900", value: "text-blue-900", id: 63 },
        { color: "bg-indigo-100", value: "text-indigo-100", id: 64 },
        { color: "bg-indigo-200", value: "text-indigo-200", id: 65 },
        { color: "bg-indigo-300", value: "text-indigo-300", id: 66 },
        { color: "bg-indigo-400", value: "text-indigo-400", id: 67 },
        { color: "bg-indigo-500", value: "text-indigo-500", id: 68 },
        { color: "bg-indigo-600", value: "text-indigo-600", id: 69 },
        { color: "bg-indigo-700", value: "text-indigo-700", id: 70 },
        { color: "bg-indigo-800", value: "text-indigo-800", id: 71 },
        { color: "bg-indigo-900", value: "text-indigo-900", id: 72 },
        { color: "bg-purple-100", value: "text-purple-100", id: 73 },
        { color: "bg-purple-200", value: "text-purple-200", id: 74 },
        { color: "bg-purple-300", value: "text-purple-300", id: 75 },
        { color: "bg-purple-400", value: "text-purple-400", id: 76 },
        { color: "bg-purple-500", value: "text-purple-500", id: 77 },
        { color: "bg-purple-600", value: "text-purple-600", id: 78 },
        { color: "bg-purple-700", value: "text-purple-700", id: 79 },
        { color: "bg-purple-800", value: "text-purple-800", id: 80 },
        { color: "bg-purple-900", value: "text-purple-900", id: 81 },
        { color: "bg-pink-100", value: "text-pink-100", id: 82 },
        { color: "bg-pink-200", value: "text-pink-200", id: 83 },
        { color: "bg-pink-300", value: "text-pink-300", id: 84 },
        { color: "bg-pink-400", value: "text-pink-400", id: 85 },
        { color: "bg-pink-500", value: "text-pink-500", id: 86 },
        { color: "bg-pink-600", value: "text-pink-600", id: 87 },
        { color: "bg-pink-700", value: "text-pink-700", id: 88 },
        { color: "bg-pink-800", value: "text-pink-800", id: 89 },
        { color: "bg-pink-900", value: "text-pink-900", id: 90 },
      ],

      // dropdown padding values
      padding: [
        "p-0",
        "p-1",
        "p-2",
        "p-3",
        "p-4",
        "p-5",
        "p-6",
        "p-7",
        "p-8",
        "p-9",
        "p-10",
        "p-11",
        "p-12",
        "p-14",
        "p-16",
        "p-20",
        "p-24",
        "p-28",
        "p-32",
        "p-36",
        "p-40",
        "p-44",
        "p-48",
        "p-52",
        "p-56",
        "p-60",
        "p-64",
        "p-72",
        "p-80",
        "p-96",
      ],

      padding_top: [
        "pt-0",
        "pt-0.5	",
        "pt-1",
        "pt-1.5",
        "pt-2",
        "pt-2.5",
        "pt-3",
        "pt-3.5",
        "pt-4",
        "pt-5",
        "pt-6",
        "pt-7",
        "pt-8",
        "pt-9",
        "pt-10",
        "pt-11",
        "pt-12",
        "pt-14",
        "pt-16",
        "pt-20",
      ],
      padding_bottom: [
        "pb-0",
        "pb-0.5	",
        "pb-1",
        "pb-1.5",
        "pb-2",
        "pb-2.5",
        "pb-3",
        "pb-3.5",
        "pb-4",
        "pb-5",
        "pb-6",
        "pb-7",
        "pb-8",
        "pb-9",
        "pb-10",
        "pb-11",
        "pb-12",
        "pb-14",
        "pb-16",
        "pb-20",
      ],
      padding_left: [
        "pl-0",
        "pl-0.5	",
        "pl-1",
        "pl-1.5",
        "pl-2",
        "pl-2.5",
        "pl-3",
        "pl-3.5",
        "pl-4",
        "pl-5",
        "pl-6",
        "pl-7",
        "pl-8",
        "pl-9",
        "pl-10",
        "pl-11",
        "pl-12",
        "pl-14",
        "pl-16",
        "pl-20",
      ],
      padding_right: [
        "pr-0",
        "pr-0.5	",
        "pr-1",
        "pr-1.5",
        "pr-2",
        "pr-2.5",
        "pr-3",
        "pr-3.5",
        "pr-4",
        "pr-5",
        "pr-6",
        "pr-7",
        "pr-8",
        "pr-9",
        "pr-10",
        "pr-11",
        "pr-12",
        "pr-14",
        "pr-16",
        "pr-20",
      ],

      // dropdown margin values
      margin: [
        "m-0",
        "m-1",
        "m-2",
        "m-3",
        "m-4",
        "m-5",
        "m-6",
        "m-7",
        "m-8",
        "m-9",
        "m-10",
        "m-11",
        "m-12",
        "m-14",
        "m-16",
        "m-20",
        "m-24",
        "m-28",
        "m-32",
        "m-36",
        "m-40",
        "m-44",
        "m-48",
        "m-52",
        "m-56",
        "m-60",
        "m-64",
        "m-72",
        "m-80",
        "m-96",
      ],
      margin_top: [
        "mt-0",
        "mt-0.5	",
        "mt-1",
        "mt-1.5",
        "mt-2",
        "mt-2.5",
        "mt-3",
        "mt-3.5",
        "mt-4",
        "mt-5",
        "mt-6",
        "mt-7",
        "mt-8",
        "mt-9",
        "mt-10",
        "mt-11",
        "mt-12",
        "mt-14",
        "mt-16",
        "mt-20",
      ],
      margin_bottom: [
        "mb-0",
        "mb-0.5	",
        "mb-1",
        "mb-1.5",
        "mb-2",
        "mb-2.5",
        "mb-3",
        "mb-3.5",
        "mb-4",
        "mb-5",
        "mb-6",
        "mb-7",
        "mb-8",
        "mb-9",
        "mb-10",
        "mb-11",
        "mb-12",
        "mb-14",
        "mb-16",
        "mb-20",
      ],
      margin_left: [
        "ml-0",
        "ml-0.5	",
        "ml-1",
        "ml-1.5",
        "ml-2",
        "ml-2.5",
        "ml-3",
        "ml-3.5",
        "ml-4",
        "ml-5",
        "ml-6",
        "ml-7",
        "ml-8",
        "ml-9",
        "ml-10",
        "ml-11",
        "ml-12",
        "ml-14",
        "ml-16",
        "ml-20",
      ],
      margin_right: [
        "mr-0",
        "mr-0.5	",
        "mr-1",
        "mr-1.5",
        "mr-2",
        "mr-2.5",
        "mr-3",
        "mr-3.5",
        "mr-4",
        "mr-5",
        "mr-6",
        "mr-7",
        "mr-8",
        "mr-9",
        "mr-10",
        "mr-11",
        "mr-12",
        "mr-14",
        "mr-16",
        "mr-20",
      ],
    };
  },
  props: {
    getUser: Function,
  },
  // sending data to parent components
  methods: {
    sendChange() {
      this.$emit("custom-change", this.selected_values);
    },
    getTextColor(value) {
      this.selected_values.text_color = value;
    },
    getBackgroundColor(value) {
      this.selected_values.background_color = value;
    },
    getBorderRadius(value) {
      this.selected_values.border_radius = value;
    },
    getBoxShadow(value) {
      this.selected_values.box_shadow = value;
    },
    getFontSize(value) {
      this.selected_values.font_size = value;
    },
    getFontWeight(value) {
      this.selected_values.font_width = value;
    },
  },
};
</script>

<style scoped>
.border {
  /* width: 10px; */
  height: 0.2;
}

.after {
  position: relative;
}
.after::after {
  content: "";
  position: absolute;
  width: 335px;
  height: 1px;
  left: -8px;
  right: 0;
  background: rgb(242, 242, 242);
  bottom: -1rem;
}
.snap-inline {
  scroll-snap-type: inline mandatory;
}
.snap-inline > * {
  scroll-snap-align: start;
}
.horizontal-scroll ::-webkit-scrollbar {
  width: 10px;
  height: 0.5em;
  margin-top: 1rem;
}
.horizontal-scroll ::-webkit-scrollbar-track {
  background: rgb(240, 240, 240);
  border-radius: 100vw;
}
.horizontal-scroll ::-webkit-scrollbar-thumb {
  background: rgb(227, 227, 227);
  width: 0.2rem;
  border-radius: 100vw;
}
input:focus {
  outline: 2px solid rgba(96, 165, 250);
}
</style>
