<template>
  <tabNavigation>
    <section class="bg-gray-800 w-96 border-l border-gray-700">
      <!-- Edit tab data -->
      <Tab name="Edit" selected="true" id="Edit">
        <div class="pl-4 h-screen overflow-y-auto pt-4">
          <!-- Card content textarea -->
          <div class="">
            <p class="text-gray-200 text-sm font-medium mb-2">Chip text</p>

            <input
              type="text"
              placeholder="Chip text"
              class="h-8 w-3/4 bg-gray-600 pl-2 text-gray-50 rounded mt-2"
              v-model="selected_values.chip_text"
              v-on:input="sendChange"
            />
          </div>
        </div>
      </Tab>
    </section>

    <section class="tab2 border-l border-gray-700">
      <Tab name="Style" id="Style">
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

          <!-- border Styling-->

          <div class="border_style relative mt-6">
            <p class="text-sm font-medium text-gray-200">Border</p>
            <div class="flex flex-wrap gap-3 mt-4">
              <div class="border_color">
                <p class="text-sm font-normal text-gray-400 mb-2">
                  Border width
                </p>
              </div>
              <div class="flex gap-3 w-11/12 flex-wrap text-sm items-center">
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
              <div class="flex gap-3 w-11/12 flex-wrap text-sm items-center">
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

    <!-- Size tab data -->
    <section class="tab3 border-l border-gray-700">
      <Tab name="Size" id="Size">
        <div class="pl-4 h-screen dropdown_scrollbar overflow-y-auto pt-4">
          <!-- padding -->
          <div class="padding relative">
            <p class="text-sm font-medium text-gray-200">padding</p>

            <div class="flex flex-wrap gap-3 mt-4">
              <div class="padding">
                <p class="text-sm font-normal text-gray-400 mb-2">px</p>
                <div class="w-32 text-xs">
                  <v-select
                    label="countryName"
                    :options="padding_x"
                    v-model="selected_values.padding_x"
                    v-on:input="sendChange"
                    class="bg-gray-700"
                  ></v-select>
                </div>
              </div>
              <div class="padding_top">
                <p class="text-sm font-normal text-gray-400 mb-2">py</p>
                <div class="w-32 text-xs">
                  <v-select
                    label="countryName"
                    :options="padding_y"
                    v-model="selected_values.padding_y"
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

    return {
      popupTriggers,
      TextPopup,
      bgPopup,
      borderColorPopup,
    };
  },
  data() {
    return {
      // dropdown selected value

      selected_values: {
        chip_text: "Suggested",
        text_color: "text-gray-400",
        padding_x: "px-3",
        padding_y: "py-1",
        background_color: "bg-gray-700",
        border_radius: "rounded-full",
        font_size: "text-base",
        font_width: "font-normal",
        box_shadow: "",
        border_width: "border",
        border_color: "border-gray-600",
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
      // border color
      borderColor: [
        { color: "border-inherit" },
        { color: "border-current" },
        { color: "border-transparent" },
        { color: "border-black" },
        { color: "border-white" },
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
        { color: "border-red-50" },
        { color: "border-red-100" },
        { color: "border-red-200" },
        { color: "border-red-300" },
        { color: "border-red-400" },
        { color: "border-red-500" },
        { color: "border-red-600" },
        { color: "border-red-700" },
        { color: "border-red-800" },
        { color: "border-red-900" },
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

      padding_x: [
        "px-0",
        "px-1",
        "px-2",
        "px-3",
        "px-4",
        "px-5",
        "px-6",
        "px-7",
        "px-8",
        "px-9",
        "px-10",
        "px-11",
        "px-12",
        "px-14",
        "px-16",
        "px-20",
        "px-24",
        "px-28",
        "px-32",
        "px-36",
        "px-40",
        "px-44",
        "px-48",
        "px-52",
        "px-56",
        "px-60",
        "px-64",
        "px-72",
        "px-80",
        "px-96",
      ],

      padding_y: [
        "py-0",
        "py-1",
        "py-2",
        "py-3",
        "py-4",
        "py-5",
        "py-6",
        "py-7",
        "py-8",
        "py-9",
        "py-10",
        "py-11",
        "py-12",
        "py-14",
        "py-16",
        "py-20",
        "py-24",
        "py-28",
        "py-32",
        "py-36",
        "py-40",
        "py-44",
        "py-48",
        "py-52",
        "py-56",
        "py-60",
        "py-64",
        "py-72",
        "py-80",
        "py-96",
      ],
    };
  },

  // sending data to parent components
  methods: {
    sendChange() {
      this.$emit("chip-values", this.selected_values);
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

    getBorderWidth(value) {
      this.selected_values.border_width = value;
    },

    getBorderColor(value) {
      this.selected_values.border_color = value;
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
  mounted() {
    try {
      this.$emit("chip-values", this.selected_values);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped></style>
