<template>
  <tabNavigation>
    <!-- Style Tab data -->
    <section class="tab_1">
      <Tab name="Style" id="Style" selected="true">
        <div class="pl-4 h-screen horizontal-scroll overflow-y-auto pt-4">
          <!-- text color -->
          <div class="title_color">
            <p class="text-sm font-medium mb-2 text-gray-200">Title color</p>
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

          <div class="text_color mt-6">
            <p class="text-sm font-medium mb-2 text-gray-200">
              Button text color
            </p>
            <div class="flex gap-3 w-full flex-wrap text-sm mt-4 items-center">
              <div
                class="flex gap-3"
                v-for="textColor in selectTextColor"
                :key="textColor.id"
              >
                <div
                  :class="textColor.color"
                  class="color1 p-3 rounded-full cursor-pointer"
                  @click="getButtonTextColor(textColor.value)"
                  v-on:click="sendChange"
                ></div>
              </div>
              <div class="color_selector flex items-center">
                <button
                  type="button"
                  value="1"
                  class="bg-blue-500 px-3 py-1 text-white rounded-full flex items-center content-center text-center"
                  @click="() => buttonTextColorPopup('buttonTextTrigger')"
                  v-on:click="sendChange"
                >
                  <p class="text-center">More Colors</p>
                </button>
                <!-- sending data in popup component  -->
                <textColorPopup
                  v-if="popupTriggers.buttonTextTrigger"
                  :buttonTextColorPopup="
                    () => buttonTextColorPopup('buttonTextTrigger')
                  "
                  :text-color="colors"
                  v-on:button-text-color="getButtonTextColor($event)"
                />
              </div>
            </div>
          </div>

          <!-- Background color -->
          <div class="background_color mt-6">
            <p class="text-sm font-medium mb-2 text-gray-200">
              Button bg color
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
                  @click="getButtonBackgroundColor(backgroundColor.color)"
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
                  v-on:popup-value="getButtonBackgroundColor($event)"
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

          <!-- border styling -->
          <div class="border_style relative mt-6">
            <p class="text-sm font-medium text-gray-200">Border</p>
            <div class="flex flex-wrap gap-3 mt-4">
              <div class="border_width">
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
                    v-on:click="sendChange"
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
                    v-on:click="sendChange"
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
      buttonTextTrigger: false,
      borderColorTrigger: false,
    });
    const TextPopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };

    const bgPopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };

    const buttonTextColorPopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };
    const borderColorPopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };

    return {
      popupTriggers,
      TextPopup,
      bgPopup,
      buttonTextColorPopup,
      borderColorPopup,
    };
  },
  data() {
    return {
      // dropdown selected value

      selected_values: {
        width: "",
        height: "",
        button_text_color: "text-white",
        text_color: "text-gray-800",
        border_width: "border",
        border_color: "border-gray-300",
        button_background_color: "bg-blue-500",
        border_radius: "rounded-xl",
        box_shadow: "",
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
        { value: "rounded-2xl", id: 6 },
      ],
      selectBorderWidth: [
        { value: "border-0", id: 1 },
        { value: "border", id: 2 },
        { value: "border-2", id: 3 },
        { value: "border-4", id: 4 },
        { value: "border-8", id: 5 },
      ],
      selectBorderColor: [
        { color: "border-pink-600", id: 1 },
        { color: "border-gray-400", id: 2 },
        { color: "border-red-400", id: 3 },
        { color: "border-green-800", id: 4 },
        { color: "border-blue-300", id: 5 },
        { color: "border-indigo-800	", id: 6 },
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
        "w-screen",
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
        "w-4/5L",
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
        "h-full",
        "h-screen",
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
        "h-64",
        "h-auto",
        "h-px",
        "h-1/2",
        "h-1/3",
        "h-2/3",
        "h-1/4",
        "h-2/4",
        "h-3/4",
        "h-1/5",
        "h-2/5",
        "h-3/5 ",
        "h-4/5L",
        "h-1/6",
        "h-2/6",
        "h-3/6",
        "h-4/6",
        "h-5/6",
        "h-1/12",
        "h-2/12",
        "h-3/12",
        "h-4/12",
        "h-5/12",
        "h-6/12",
        "h-7/12",
        "h-8/12",
        "h-9/12",
        "h-10/12",
        "h-11/12",
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
      this.$emit("form-values", this.selected_values);
    },
    getTextColor(value) {
      this.selected_values.text_color = value;
    },
    getButtonTextColor(value) {
      this.selected_values.button_text_color = value;
    },
    getButtonBackgroundColor(value) {
      this.selected_values.button_background_color = value;
    },
    getBorderRadius(value) {
      this.selected_values.border_radius = value;
    },
    getBoxShadow(value) {
      this.selected_values.box_shadow = value;
    },
    getBorderWidth(value) {
      this.selected_values.border_width = value;
    },
    getBorderColor(value) {
      this.selected_values.border_color = value;
    },
  },
  mounted() {
    try {
      this.$emit("form-values", this.selected_values);
    } catch (error) {
      console.log(error);
    }
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
input:focus,
textarea:focus {
  outline: 2px solid rgba(96, 165, 250);
}
</style>
