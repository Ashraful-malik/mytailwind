<template>
  <tabNavigation>
    <!-- Style Tab data -->
    <section class="tab_1">
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

          <div class="icon_color mt-6">
            <p class="text-sm font-medium mb-2 text-gray-200">Icon color</p>
            <div class="flex gap-3 w-full flex-wrap text-sm mt-4 items-center">
              <div
                class="flex gap-3"
                v-for="textColor in selectTextColor"
                :key="textColor.id"
              >
                <div
                  :class="textColor.color"
                  class="color1 p-3 rounded-full cursor-pointer"
                  @click="getIconColor(textColor.value)"
                  v-on:click="sendChange"
                ></div>
              </div>
              <div class="color_selector flex items-center">
                <button
                  type="button"
                  value="1"
                  class="bg-blue-500 px-3 py-1 text-white rounded-full flex items-center content-center text-center"
                  @click="() => IconButtonColorPopup('iconButtonColorTrigger')"
                  v-on:click="sendChange"
                >
                  <p class="text-center">More Colors</p>
                </button>
                <!-- sending data in popup component  -->
                <textColorPopup
                  v-if="popupTriggers.iconButtonColorTrigger"
                  :IconButtonColorPopup="
                    () => IconButtonColorPopup('iconButtonColorTrigger')
                  "
                  :text-color="colors"
                  v-on:icon-color="getIconColor($event)"
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
          <div class="font_weight mt-6 mb-16">
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
        </div>
      </Tab>
    </section>
    <!-- Size tab data -->
    <section class="tab_2">
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

          <!-- margin -->
          <div class="margin mt-6">
            <p class="text-sm font-medium text-gray-200">Margin</p>
            <div class="flex flex-wrap gap-3 mt-4 items-center">
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
      iconButtonColorTrigger: false,
    });
    const TextPopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };
    const bgPopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };
    const IconButtonColorPopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };

    return {
      popupTriggers,
      TextPopup,
      bgPopup,
      IconButtonColorPopup,
    };
  },
  data() {
    return {
      // dropdown selected value

      selected_values: {
        width: "w-2/4",
        height: "",
        text_color: "text-gray-400",
        margin_top: "mt-8",
        background_color: "bg-gray-800",
        border_radius: "",
        font_size: "text-base",
        font_width: "",
        icon_color: "text-gray-400",
      },

      selectTextColor: [
        { color: "bg-red-500", id: 1, value: "text-red-500" },
        { color: "bg-white", id: 2, value: "text-white" },
        { color: "bg-blue-600", id: 3, value: "text-blue-600" },
        { color: "bg-yellow-400", id: 4, value: "text-yellow-400" },
        { color: "bg-green-500", id: 5, value: "text-green-500" },
      ],
      selectCardContentColor: [
        { color: "bg-gray-100	", id: 1, value: "text-gray-100" },
        { color: "bg-gray-200", id: 2, value: "text-gray-200" },
        { color: "bg-gray-400", id: 3, value: "text-gray-400" },
        { color: "bg-gray-500", id: 4, value: "text-gray-500" },
        { color: "bg-gray-200", id: 5, value: "text-gray-200" },
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
        { value: "rounded-xl", id: 5 },
        { value: "rounded-full", id: 6 },
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

      //Text color
      colors: [
        { color: "bg-current", value: "text-current", id: 1 },
        { color: "bg-white", value: "text-white", id: 2 },
        { color: "bg-black", value: "text-black", id: 3 },
        { color: "bg-gray-50", value: "text-gray-50", id: 4 },
        { color: "bg-gray-100", value: "text-gray-100", id: 5 },
        { color: "bg-gray-200", value: "text-gray-200", id: 6 },
        { color: "bg-gray-300", value: "text-gray-300", id: 7 },
        { color: "bg-gray-400", value: "text-gray-400", id: 8 },
        { color: "bg-gray-500", value: "text-gray-500", id: 9 },
        { color: "bg-gray-600", value: "text-gray-600", id: 10 },
        { color: "bg-gray-700", value: "text-gray-700", id: 11 },
        { color: "bg-gray-800", value: "text-gray-800", id: 12 },
        { color: "bg-gray-900", value: "text-gray-900", id: 13 },
        { color: "bg-red-100", value: "text-red-100", id: 14 },
        { color: "bg-red-200", value: "text-red-200", id: 15 },
        { color: "bg-red-300", value: "text-red-300", id: 16 },
        { color: "bg-red-400", value: "text-red-400", id: 17 },
        { color: "bg-red-500", value: "text-red-500", id: 18 },
        { color: "bg-red-600", value: "text-red-600", id: 19 },
        { color: "bg-red-700", value: "text-red-700", id: 20 },
        { color: "bg-red-800", value: "text-red-800", id: 21 },
        { color: "bg-red-900", value: "text-red-900", id: 22 },
        { color: "bg-yellow-100", value: "text-yellow-100", id: 23 },
        { color: "bg-yellow-200", value: "text-yellow-200", id: 24 },
        { color: "bg-yellow-300", value: "text-yellow-300", id: 25 },
        { color: "bg-yellow-400", value: "text-yellow-400", id: 26 },
        { color: "bg-yellow-500", value: "text-yellow-500", id: 27 },
        { color: "bg-yellow-600", value: "text-yellow-600", id: 28 },
        { color: "bg-yellow-700", value: "text-yellow-700", id: 29 },
        { color: "bg-yellow-800", value: "text-yellow-800", id: 30 },
        { color: "bg-yellow-900", value: "text-yellow-900", id: 31 },
        { color: "bg-green-100", value: "text-green-100", id: 32 },
        { color: "bg-green-200", value: "text-green-200", id: 33 },
        { color: "bg-green-300", value: "text-green-300", id: 34 },
        { color: "bg-green-400", value: "text-green-400", id: 35 },
        { color: "bg-green-500", value: "text-green-500", id: 36 },
        { color: "bg-green-600", value: "text-green-600", id: 37 },
        { color: "bg-green-700", value: "text-green-700", id: 38 },
        { color: "bg-green-800", value: "text-green-800", id: 39 },
        { color: "bg-green-900", value: "text-green-900", id: 40 },
        { color: "bg-blue-100", value: "text-blue-100", id: 41 },
        { color: "bg-blue-200", value: "text-blue-200", id: 42 },
        { color: "bg-blue-300", value: "text-blue-300", id: 42 },
        { color: "bg-blue-400", value: "text-blue-400", id: 44 },
        { color: "bg-blue-500", value: "text-blue-500", id: 45 },
        { color: "bg-blue-600", value: "text-blue-600", id: 46 },
        { color: "bg-blue-700", value: "text-blue-700", id: 47 },
        { color: "bg-blue-800", value: "text-blue-800", id: 48 },
        { color: "bg-blue-900", value: "text-blue-900", id: 49 },
        { color: "bg-indigo-100", value: "text-indigo-100", id: 50 },
        { color: "bg-indigo-200", value: "text-indigo-200", id: 51 },
        { color: "bg-indigo-300", value: "text-indigo-300", id: 52 },
        { color: "bg-indigo-400", value: "text-indigo-400", id: 53 },
        { color: "bg-indigo-500", value: "text-indigo-500", id: 54 },
        { color: "bg-indigo-600", value: "text-indigo-600", id: 55 },
        { color: "bg-indigo-700", value: "text-indigo-700", id: 56 },
        { color: "bg-indigo-800", value: "text-indigo-800", id: 57 },
        { color: "bg-indigo-900", value: "text-indigo-900", id: 58 },
        { color: "bg-purple-100", value: "text-purple-100", id: 59 },
        { color: "bg-purple-200", value: "text-purple-200", id: 60 },
        { color: "bg-purple-300", value: "text-purple-300", id: 61 },
        { color: "bg-purple-400", value: "text-purple-400", id: 62 },
        { color: "bg-purple-500", value: "text-purple-500", id: 63 },
        { color: "bg-purple-600", value: "text-purple-600", id: 64 },
        { color: "bg-purple-700", value: "text-purple-700", id: 65 },
        { color: "bg-purple-800", value: "text-purple-800", id: 66 },
        { color: "bg-purple-900", value: "text-purple-900", id: 67 },
        { color: "bg-pink-100", value: "text-pink-100", id: 68 },
        { color: "bg-pink-200", value: "text-pink-200", id: 69 },
        { color: "bg-pink-300", value: "text-pink-300", id: 70 },
        { color: "bg-pink-400", value: "text-pink-400", id: 71 },
        { color: "bg-pink-500", value: "text-pink-500", id: 72 },
        { color: "bg-pink-600", value: "text-pink-600", id: 73 },
        { color: "bg-pink-700", value: "text-pink-700", id: 74 },
        { color: "bg-pink-800", value: "text-pink-800", id: 75 },
        { color: "bg-pink-900", value: "text-pink-900", id: 76 },
      ],
      // dropdown padding values
      width: [
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
        "w-0",
        "w-full",
        "w-1",
        "w-2",
        "w-3",
        "w-4",
        "w-5",
        "w-6",
        "w-8",
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
      ],
      height: [
        "h-full",
        "h-1",
        "h-2",
        "h-3",
        "h-4",
        "h-5",
        "h-6",
        "h-8",
        "h-10",
        "h-12",
        "h-16",
        "h-20",
        "h-24",
        "h-32",
        "h-40",
        "h-48",
        "h-56",
        "h-60",
        "h-64",
        "h-72",
        "h-80",
        "h-96",
        "h-1/5",
        "h-2/5",
        "h-3/5 ",
        "h-4/5",
        "h-1/6",
        "h-2/6",
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

  // sending data to parent components
  methods: {
    sendChange() {
      this.$emit("footer-values", this.selected_values);
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

    getFontSize(value) {
      this.selected_values.font_size = value;
    },
    getFontWeight(value) {
      this.selected_values.font_width = value;
    },
    getIconColor(value) {
      this.selected_values.icon_color = value;
    },
  },
  mounted() {
    try {
      this.$emit("footer-values", this.selected_values);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
input:focus,
textarea:focus {
  outline: 2px solid rgba(96, 165, 250);
}
</style>
