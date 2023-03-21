<template>
  <tabNavigation>
    <section class="tab_2">
      <Tab name="Style" id="Style" selected="true">
        <div
          class="pl-4 h-screen overflow-y-auto pt-4 component_height"
          id="custom_scrollbar"
        >
          <!-- text color -->
          <div class="text_color">
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
                  @click="() => TextPopup('TextColorTrigger')"
                  v-on:click="sendChange"
                >
                  <p class="text-center">More Colors</p>
                </button>

                <!-- sending data in popup component  -->
                <textColorPopup
                  v-if="popupTriggers.TextColorTrigger"
                  :TextPopup="() => TextPopup('TextColorTrigger')"
                  :text-color="colors"
                  v-on:popup-value="getTextColor($event)"
                />
              </div>
            </div>
          </div>

          <!-- Background color -->
          <div class="background_color mt-6">
            <p class="text-sm font-medium mb-2 text-gray-200">
              Background color
            </p>
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
          <!-- input placeholder color -->
          <div class="background_color mt-6">
            <p class="text-sm font-medium mb-2 text-gray-200">
              Input placeholder color
            </p>
            <div class="flex gap-3 w-full flex-wrap text-sm mt-4 items-center">
              <div
                class="flex gap-3"
                v-for="placeholderColor in selectPlaceholderColor"
                :key="placeholderColor.id"
              >
                <div
                  :class="placeholderColor.color"
                  class="p-3 rounded-full cursor-pointer border-gray-400"
                  @click="
                    getPlaceholderColor(placeholderColor.placeholderColor)
                  "
                  v-on:click="sendChange"
                ></div>
              </div>
              <div class="color_selector flex items-center">
                <button
                  type="button"
                  value="1"
                  class="bg-blue-500 px-3 py-1 text-white rounded-full flex items-center content-center text-center"
                  @click="() => placeholderPopup('placeholderColorTrigger')"
                  v-on:click="sendChange"
                >
                  <p class="text-center">More Colors</p>
                </button>

                <!-- sending data in bgColor popup component-->
                <placeholderColorPopup
                  v-if="popupTriggers.placeholderColorTrigger"
                  :placeholderPopup="
                    () => placeholderPopup('placeholderColorTrigger')
                  "
                  :placeholder-color="colors"
                  v-on:placeholder-value="getPlaceholderColor($event)"
                />
              </div>
            </div>
          </div>

          <!-- border Styling-->

          <div class="border_style relative mt-6">
            <p class="text-sm font-medium text-gray-200">Border</p>
            <div class="flex flex-wrap gap-3 mt-4">
              <div class="border_color">
                <p class="text-sm font-normal text-gray-400 mb-2">
                  Border width
                </p>
              </div>
              <div class="flex gap-3 w-full flex-wrap text-sm items-center">
                <div
                  v-for="borderWidth in selectBorderWidth"
                  :key="borderWidth.id"
                >
                  <div
                    class="px-3 py-1 text-center border cursor-pointer border-gray-600 rounded-md bg-gray-700"
                    @click="getBorderWidth(borderWidth.value)"
                  >
                    <p class="text-white">{{ borderWidth.value }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-wrap gap-3 mt-4">
              <div class="border_color">
                <p class="text-sm font-normal text-gray-400 mb-2">
                  Border color
                </p>
              </div>
              <div class="flex gap-3 w-full flex-wrap text-sm items-center">
                <div
                  v-for="borderColor in selectBorderColor"
                  :key="borderColor.id"
                >
                  <div
                    :class="borderColor.color"
                    class="px-3 py-1 text-center border cursor-pointer rounded-md bg-gray-700"
                    @click="getBorderColor(borderColor.color)"
                  >
                    <p class="text-white px-3 py-2"></p>
                  </div>
                </div>
                <div class="color_selector flex items-center">
                  <button
                    type="button"
                    value="1"
                    class="bg-blue-500 px-3 py-1 text-white rounded-full flex items-center content-center text-center"
                    @click="() => borderColorPopup('borderColorTrigger')"
                    v-on:click="sendChange"
                  >
                    <p class="text-center">More Colors</p>
                  </button>

                  <!-- sending data in popup component  -->
                  <borderColorPopup
                    v-if="popupTriggers.borderColorTrigger"
                    :borderColorPopup="
                      () => borderColorPopup('borderColorTrigger')
                    "
                    :names-array="borderColor"
                    v-on:popup-value="getBorderColor($event)"
                  />
                </div>
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
          <div class="box_shadow mt-6 mb-16">
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
        </div>
      </Tab>
    </section>
    <section class="tab_1">
      <Tab name="Size" id="Size">
        <div class="pl-4 h-screen dropdown_scrollbar overflow-y-auto pt-4">
          <div class="padding relative">
            <p class="text-sm font-medium text-gray-200">Size</p>

            <div class="flex flex-wrap gap-3 mt-4">
              <div class="width">
                <p class="text-sm font-normal text-gray-400 mb-2">width</p>
                <div class="w-32 text-xs">
                  <v-select
                    label="countryName"
                    :options="width"
                    v-model="selected_values.width"
                    v-on:input="sendChange"
                    class="bg-gray-700"
                  ></v-select>
                </div>
              </div>
              <div class="height">
                <p class="text-sm font-normal text-gray-400 mb-2">height</p>
                <div class="w-32 text-xs">
                  <v-select
                    label="countryName"
                    :options="height"
                    v-model="selected_values.height"
                    v-on:input="sendChange"
                    class="bg-gray-700"
                  ></v-select>
                </div>
              </div>
            </div>
          </div>
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
            </div>
          </div>
        </div>
      </Tab>
    </section>
  </tabNavigation>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["value"],
  setup() {
    const popupTriggers = ref({
      TextColorTrigger: false,
      bgColorTrigger: false,
      borderColorTrigger: false,
      placeholderColorTrigger: false,
    });
    const TextPopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };
    const bgPopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };
    const borderColorPopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };
    const placeholderPopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };

    return {
      popupTriggers,
      TextPopup,
      bgPopup,
      borderColorPopup,
      placeholderPopup,
    };
  },
  data() {
    return {
      // dropdown selected value

      selected_values: {
        width: "w-80",
        height: "h-9",
        text_color: "text-gray-800",
        padding: "p-2",
        background_color: "",
        border_radius: "rounded-md",
        font_size: " text-base",
        font_width: "font-normal",
        box_shadow: "",
        border_width: "border",
        border_color: "",
        placeholder_color: "",
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
      selectPlaceholderColor: [
        { color: "bg-indigo-500", placeholderColor: "indigo-500", id: 1 },
        { color: "bg-white", placeholderColor: "white", id: 2 },
        { color: "bg-gray-900", placeholderColor: "gray-900", id: 3 },
        { color: "bg-yellow-400", placeholderColor: "yellow-400", id: 4 },
        { color: "bg-green-500", placeholderColor: "green-500", id: 5 },
      ],
      selectBorderColor: [
        { color: "border-pink-600", id: 1 },
        { color: "border-gray-400", id: 2 },
        { color: "border-red-400", id: 3 },
        { color: "border-green-800", id: 4 },
        { color: "border-blue-300", id: 5 },
        { color: "border-indigo-800	", id: 6 },
      ],

      selectBorderRadius: [
        { value: "rounded-none", id: 1 },
        { value: "rounded", id: 2 },
        { value: "rounded-md", id: 4 },
        { value: "rounded-xl", id: 5 },
        { value: "rounded-full", id: 6 },
      ],
      selectBorderWidth: [
        { value: "border-0", id: 1 },
        { value: "border", id: 2 },
        { value: "border-2", id: 3 },
        { value: "border-4", id: 4 },
        { value: "border-8", id: 5 },
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
        {
          color: "bg-current", //this is background color value
          value: "text-current", //value is use in text color
          id: 1,
          placeholderColor: "current",
        },
        {
          color: "bg-white",
          value: "text-white",
          id: 2,
          placeholderColor: "white",
        },
        {
          color: "bg-black",
          value: "text-black",
          id: 3,
          placeholderColor: "black",
        },
        {
          color: "bg-gray-50",
          value: "text-gray-50",
          id: 4,
          placeholderColor: "gray-50",
        },
        {
          color: "bg-gray-100",
          value: "text-gray-100",
          id: 5,
          placeholderColor: "gray-100",
        },
        {
          color: "bg-gray-200",
          value: "text-gray-200",
          id: 6,
          placeholderColor: "gray-200",
        },
        {
          color: "bg-gray-300",
          value: "text-gray-300",
          id: 7,
          placeholderColor: "gray-300",
        },
        {
          color: "bg-gray-400",
          value: "text-gray-400",
          id: 8,
          placeholderColor: "gray-400",
        },
        {
          color: "bg-gray-500",
          value: "text-gray-500",
          id: 9,
          placeholderColor: "gray-500",
        },
        {
          color: "bg-gray-600",
          value: "text-gray-600",
          id: 10,
          placeholderColor: "gray-600",
        },
        {
          color: "bg-gray-700",
          value: "text-gray-700",
          id: 11,
          placeholderColor: "gray-700",
        },
        {
          color: "bg-gray-800",
          value: "text-gray-800",
          id: 12,
          placeholderColor: "gray-800",
        },
        {
          color: "bg-gray-900",
          value: "text-gray-900",
          id: 13,
          placeholderColor: "gray-900",
        },
        {
          color: "bg-red-100",
          value: "text-red-100",
          id: 14,
          placeholderColor: "red-100",
        },
        {
          color: "bg-red-200",
          value: "text-red-200",
          id: 15,
          placeholderColor: "red-200",
        },
        {
          color: "bg-red-300",
          value: "text-red-300",
          id: 16,
          placeholderColor: "red-300",
        },
        {
          color: "bg-red-400",
          value: "text-red-400",
          id: 17,
          placeholderColor: "red-400",
        },
        {
          color: "bg-red-500",
          value: "text-red-500",
          id: 18,
          placeholderColor: "red-500",
        },
        {
          color: "bg-red-600",
          value: "text-red-600",
          id: 19,
          placeholderColor: "red-600",
        },
        {
          color: "bg-red-700",
          value: "text-red-700",
          id: 20,
          placeholderColor: "red-700",
        },
        {
          color: "bg-red-800",
          value: "text-red-800",
          id: 21,
          placeholderColor: "red-800",
        },
        {
          color: "bg-red-900",
          value: "text-red-900",
          id: 22,
          placeholderColor: "red-900",
        },
        {
          color: "bg-yellow-100",
          value: "text-yellow-100",
          id: 23,
          placeholderColor: "yellow-100",
        },
        {
          color: "bg-yellow-200",
          value: "text-yellow-200",
          id: 24,
          placeholderColor: "yellow-200",
        },
        {
          color: "bg-yellow-300",
          value: "text-yellow-300",
          id: 25,
          placeholderColor: "yellow-300",
        },
        {
          color: "bg-yellow-400",
          value: "text-yellow-400",
          id: 26,
          placeholderColor: "yellow-400",
        },
        {
          color: "bg-yellow-500",
          value: "text-yellow-500",
          id: 27,
          placeholderColor: "yellow-500",
        },
        {
          color: "bg-yellow-600",
          value: "text-yellow-600",
          id: 28,
          placeholderColor: "yellow-600",
        },
        {
          color: "bg-yellow-700",
          value: "text-yellow-700",
          id: 29,
          placeholderColor: "yellow-700",
        },
        {
          color: "bg-yellow-800",
          value: "text-yellow-800",
          id: 30,
          placeholderColor: "yellow-800",
        },
        {
          color: "bg-yellow-900",
          value: "text-yellow-900",
          id: 31,
          placeholderColor: "yellow-900",
        },
        {
          color: "bg-green-100",
          value: "text-green-100",
          id: 32,
          placeholderColor: "green-100",
        },
        {
          color: "bg-green-200",
          value: "text-green-200",
          id: 33,
          placeholderColor: "green-200",
        },
        {
          color: "bg-green-300",
          value: "text-green-300",
          id: 34,
          placeholderColor: "green-300",
        },
        {
          color: "bg-green-400",
          value: "text-green-400",
          id: 35,
          placeholderColor: "green-400",
        },
        {
          color: "bg-green-500",
          value: "text-green-500",
          id: 36,
          placeholderColor: "green-500",
        },
        {
          color: "bg-green-600",
          value: "text-green-600",
          id: 37,
          placeholderColor: "green-600",
        },
        {
          color: "bg-green-700",
          value: "text-green-700",
          id: 38,
          placeholderColor: "green-700",
        },
        {
          color: "bg-green-800",
          value: "text-green-800",
          id: 39,
          placeholderColor: "green-800",
        },
        {
          color: "bg-green-900",
          value: "text-green-900",
          id: 40,
          placeholderColor: "green-900",
        },
        {
          color: "bg-blue-100",
          value: "text-blue-100",
          id: 41,
          placeholderColor: "blue-100",
        },
        {
          color: "bg-blue-200",
          value: "text-blue-200",
          id: 42,
          placeholderColor: "blue-200",
        },
        {
          color: "bg-blue-300",
          value: "text-blue-300",
          id: 42,
          placeholderColor: "blue-300",
        },
        {
          color: "bg-blue-400",
          value: "text-blue-400",
          id: 44,
          placeholderColor: "blue-400",
        },
        {
          color: "bg-blue-500",
          value: "text-blue-500",
          id: 45,
          placeholderColor: "blue-500",
        },
        {
          color: "bg-blue-600",
          value: "text-blue-600",
          id: 46,
          placeholderColor: "blue-600",
        },
        {
          color: "bg-blue-700",
          value: "text-blue-700",
          id: 47,
          placeholderColor: "blue-700",
        },
        {
          color: "bg-blue-800",
          value: "text-blue-800",
          id: 48,
          placeholderColor: "blue-800",
        },
        {
          color: "bg-blue-900",
          value: "text-blue-900",
          id: 49,
          placeholderColor: "blue-900",
        },
        {
          color: "bg-indigo-100",
          value: "text-indigo-100",
          id: 50,
          placeholderColor: "indigo-100",
        },
        {
          color: "bg-indigo-200",
          value: "text-indigo-200",
          id: 51,
          placeholderColor: "indigo-200",
        },
        {
          color: "bg-indigo-300",
          value: "text-indigo-300",
          id: 52,
          placeholderColor: "indigo-300",
        },
        {
          color: "bg-indigo-400",
          value: "text-indigo-400",
          id: 53,
          placeholderColor: "indigo-400",
        },
        {
          color: "bg-indigo-500",
          value: "text-indigo-500",
          id: 54,
          placeholderColor: "indigo-500",
        },
        {
          color: "bg-indigo-600",
          value: "text-indigo-600",
          id: 55,
          placeholderColor: "indigo-600",
        },
        {
          color: "bg-indigo-700",
          value: "text-indigo-700",
          id: 56,
          placeholderColor: "indigo-700",
        },
        {
          color: "bg-indigo-800",
          value: "text-indigo-800",
          id: 57,
          placeholderColor: "indigo-800",
        },
        {
          color: "bg-indigo-900",
          value: "text-indigo-900",
          id: 58,
          placeholderColor: "indigo-900",
        },
        {
          color: "bg-purple-100",
          value: "text-purple-100",
          id: 59,
          placeholderColor: "purple-100",
        },
        {
          color: "bg-purple-200",
          value: "text-purple-200",
          id: 60,
          placeholderColor: "",
        },
        {
          color: "bg-purple-300",
          value: "text-purple-300",
          id: 61,
          placeholderColor: "purple-300",
        },
        {
          color: "bg-purple-400",
          value: "text-purple-400",
          id: 62,
          placeholderColor: "purple-400",
        },
        {
          color: "bg-purple-500",
          value: "text-purple-500",
          id: 63,
          placeholderColor: "purple-500",
        },
        {
          color: "bg-purple-600",
          value: "text-purple-600",
          id: 64,
          placeholderColor: "purple-600",
        },
        {
          color: "bg-purple-700",
          value: "text-purple-700",
          id: 65,
          placeholderColor: "purple-700",
        },
        {
          color: "bg-purple-800",
          value: "text-purple-800",
          id: 66,
          placeholderColor: "purple-800",
        },
        {
          color: "bg-purple-900",
          value: "text-purple-900",
          id: 67,
          placeholderColor: "purple-900",
        },
        {
          color: "bg-pink-100",
          value: "text-pink-100",
          id: 68,
          placeholderColor: "pink-100",
        },
        {
          color: "bg-pink-200",
          value: "text-pink-200",
          id: 69,
          placeholderColor: "pink-200",
        },
        {
          color: "bg-pink-300",
          value: "text-pink-300",
          id: 70,
          placeholderColor: "pink-300",
        },
        {
          color: "bg-pink-400",
          value: "text-pink-400",
          id: 71,
          placeholderColor: "pink-400",
        },
        {
          color: "bg-pink-500",
          value: "text-pink-500",
          id: 72,
          placeholderColor: "pink-500",
        },
        {
          color: "bg-pink-600",
          value: "text-pink-600",
          id: 73,
          placeholderColor: "pink-600",
        },
        {
          color: "bg-pink-700",
          value: "text-pink-700",
          id: 74,
          placeholderColor: "pink-700",
        },
        {
          color: "bg-pink-800",
          value: "text-pink-800",
          id: 75,
          placeholderColor: "pink-800",
        },
        {
          color: "bg-pink-900",
          value: "text-pink-900",
          id: 76,
          placeholderColor: "pink-900",
        },
      ],
      // border color
      borderColor: [
        { color: "border-inherit" },
        { color: "border-current" },
        { color: "border-transparent" },
        { color: "border-black	 " },
        { color: "border-white	" },
        { color: "border-slate-50	" },
        { color: "border-slate-100" },
        { color: "border-slate-200" },
        { color: "border-slate-300" },
        { color: "border-slate-400" },
        { color: "border-slate-500" },
        { color: "border-slate-600" },
        { color: "border-slate-700" },
        { color: "border-slate-800" },
        { color: "border-slate-900" },
        { color: "border-gray-50	   " },
        { color: "border-gray-100" },
        { color: "border-gray-200" },
        { color: "border-gray-300" },
        { color: "border-gray-400" },
        { color: "border-gray-500" },
        { color: "border-gray-600" },
        { color: "border-gray-700" },
        { color: "border-gray-800" },
        { color: "border-gray-900" },
        { color: "border-red-50	  " },
        { color: "border-red-100  " },
        { color: "border-red-200	  " },
        { color: "border-red-300	  " },
        { color: "border-red-400	 " },
        { color: "border-red-500  " },
        { color: "border-red-600  " },
        { color: "border-red-700  " },
        { color: "border-red-800  " },
        { color: "border-red-900	 " },
        { color: "border-orange-50" },
        { color: "border-orange-100" },
        { color: "border-orange-200" },
        { color: "border-orange-300" },
        { color: "border-orange-400" },
        { color: "border-orange-500" },
        { color: "border-orange-600" },
        { color: "border-orange-700" },
        { color: "border-orange-800" },
        { color: "border-orange-900" },
        { color: "border-amber-100" },
        { color: "border-amber-50	" },
        { color: "border-amber-300" },
        { color: "border-amber-200" },
        { color: "border-amber-500" },
        { color: "border-amber-400" },
        { color: "border-amber-700" },
        { color: "border-amber-600" },
        { color: "border-amber-900" },
        { color: "border-amber-800" },
        { color: "border-yellow-100" },
        { color: "border-yellow-50" },
        { color: "border-yellow-300" },
        { color: "border-yellow-200" },
        { color: "border-yellow-500" },
        { color: "border-yellow-400" },
        { color: "border-yellow-700" },
        { color: "border-yellow-600" },
        { color: "border-yellow-800" },
        { color: "border-yellow-900" },
        { color: "border-lime-50" },
        { color: "border-lime-100" },
        { color: "border-lime-200" },
        { color: "border-lime-300" },
        { color: "border-lime-400" },
        { color: "border-lime-500" },
        { color: "border-lime-600	" },
        { color: "border-lime-700	" },
        { color: "border-lime-800	" },
        { color: "border-lime-900	" },
        { color: "border-green-50	" },
        { color: "border-green-100" },
        { color: "border-green-200" },
        { color: "border-green-300" },
        { color: "border-green-400" },
        { color: "border-green-500" },
        { color: "border-green-600" },
        { color: "border-green-700" },
        { color: "border-green-800" },
        { color: "border-green-900" },
        { color: "border-blue-50" },
        { color: "border-blue-100" },
        { color: "border-blue-200" },
        { color: "border-blue-300" },
        { color: "border-blue-400" },
        { color: "border-blue-500" },
        { color: "border-blue-600" },
        { color: "border-blue-700" },
        { color: "border-blue-800" },
        { color: "border-blue-900" },
        { color: "border-purple-50" },
        { color: "border-purple-100" },
        { color: "border-purple-200" },
        { color: "border-purple-300" },
        { color: "border-purple-400" },
        { color: "border-purple-500" },
        { color: "border-purple-600" },
        { color: "border-purple-700" },
        { color: "border-purple-800" },
        { color: "border-purple-900" },
        { color: "border-pink-50" },
        { color: "border-pink-100" },
        { color: "border-pink-200" },
        { color: "border-pink-300" },
        { color: "border-pink-400" },
        { color: "border-pink-500" },
        { color: "border-pink-600" },
        { color: "border-pink-700" },
        { color: "border-pink-800" },
        { color: "border-pink-900" },
      ],

      // dropdown padding values
      width: [
        "w-0",
        "w-full",
        "w-1",
        "w-2",
        "w-3",
        "w-4",
        "w-5",
        "w-6",
        "w-8",
        "w-9",
        "w-10",
        "w-12",
        "w-16",
        "w-20",
        "w-24",
        "w-32",
        "w-40",
        "w-48",
        "w-56",
        "w-64",
        "w-72",
        "w-80",
        "w-96",
        "w-auto",
        "w-px",
        "w-1/2",
        "w-1/3",
        "w-2/3",
        "w-1/4",
        "w-2/4",
        "w-3/4",
        "w-1/5",
        "w-2/5",
        "w-3/5 ",
        "w-4/5",
        "w-1/6",
        "w-2/6",
        "w-3/6",
        "w-4/6",
        "w-5/6",
        "w-1/12",
        "w-2/12",
        "w-3/12",
        "w-4/12",
        "w-5/12",
        "w-6/12",
        "w-7/12",
        "w-8/12",
        "w-9/12",
        "w-10/12",
        "w-11/12",
      ],
      height: [
        "h-0",
        "h-1",
        "h-2",
        "h-3",
        "h-4",
        "h-5",
        "h-6",
        "h-8",
        "h-9",
        "h-10",
        "h-12",
        "h-16",
        "h-20",
        "h-28",
        "h-24",
        "h-32",
        "h-36",
        "h-40",
        "h-44",
        "h-48",
        "h-52",
        "h-56",
        "h-60",
        "h-64",
        "h-1/2",
        "h-1/3",
        "h-2/3",
        "h-1/4",
        "h-2/4",
        "h-3/4",
        "h-1/5",
        "h-2/5",
        "h-3/5 ",
        "h-1/6",
        "h-2/6",
        "h-3/6",
        "h-4/6",
        "h-5/6",
        "h-auto",
        "h-min",
        "h-max",
        "h-fit",
      ],
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
    };
  },

  // sending data to parent components
  methods: {
    sendChange() {
      this.$emit("input-field-values", this.selected_values);
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
    getBorderWidth(value) {
      this.selected_values.border_width = value;
    },
    getBorderColor(value) {
      this.selected_values.border_color = value;
    },
    getPlaceholderColor(value) {
      this.selected_values.placeholder_color = value;
    },
  },
  mounted() {
    try {
      this.$emit("input-field-values", this.selected_values);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped></style>
