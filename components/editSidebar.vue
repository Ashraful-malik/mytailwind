<template>
  <tabNavigation>
    <section class="tab1">
      <Tab name="Style" id="Style" selected="true">
        <div
          class="pl-4 h-screen horizontal-scroll overflow-y-auto pt-4 "
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

          <!-- hover effect color -->
          <!-- hover background color -->
          <div class="hover_effect mt-6">
            <p class="text-sm font-medium text-gray-200">Hover color</p>

            <div class="hover_background_color">
              <p class="text-sm font-normal text-gray-400 mb-2 mt-4">
                Background color
              </p>

              <div
                class="flex gap-3 w-full flex-wrap text-sm mt-4 items-center"
              >
                <div
                  class="flex gap-3"
                  v-for="backgroundColor in selectHoverColor"
                  :key="backgroundColor.id"
                >
                  <div
                    :class="backgroundColor.color"
                    class="color1 p-3 rounded-full cursor-pointer"
                    @click="getHoverBgColor(backgroundColor.value)"
                    v-on:click="sendChange"
                  ></div>
                </div>
                <div class="color_selector flex items-center">
                  <button
                    type="button"
                    value="1"
                    class="bg-blue-500 px-3 py-1 text-white rounded-full flex items-center content-center text-center"
                    @click="() => hoverBgPopup('hoverBgTrigger')"
                    v-on:click="sendChange"
                  >
                    <p class="text-center">More Colors</p>
                  </button>
                  <!-- sending data in popup component  -->
                  <bgColorPopup
                    v-if="popupTriggers.hoverBgTrigger"
                    :hoverBgPopup="() => hoverBgPopup('hoverBgTrigger')"
                    :background-color="colors"
                    v-on:hover-bg-color="getHoverBgColor($event)"
                  />
                </div>
              </div>
            </div>
            <!-- hover text color -->

            <div class="hover_text_color">
              <p class="text-sm font-normal text-gray-400 mb-2 mt-4">
                Text color
              </p>

              <div
                class="flex gap-3 w-full flex-wrap text-sm mt-4 items-center"
              >
                <div
                  class="flex gap-3"
                  v-for="hoverTextColor in selectHoverTextColor"
                  :key="hoverTextColor.id"
                >
                  <div
                    :class="hoverTextColor.color"
                    class="color1 p-3 rounded-full cursor-pointer"
                    @click="getHoverTextColor(hoverTextColor.value)"
                    v-on:click="sendChange"
                  ></div>
                </div>
                <div class="color_selector flex items-center">
                  <button
                    type="button"
                    value="1"
                    class="bg-blue-500 px-3 py-1 text-white rounded-full flex items-center content-center text-center"
                    @click="() => hoverTextPopup('hoverTextTrigger')"
                    v-on:click="sendChange"
                  >
                    <p class="text-center">More Colors</p>
                  </button>
                  <!-- sending data in popup component  -->
                  <textColorPopup
                    v-if="popupTriggers.hoverTextTrigger"
                    :hoverTextPopup="() => hoverTextPopup('hoverTextTrigger')"
                    :text-color="colors"
                    v-on:click="sendChange"
                    v-on:hover-text-color="getHoverTextColor($event)"
                  />
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
          <div class="font_weight mt-6 mb-28">
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
    <section class="tab3">
      <Tab name="Size" id="Size">
        <div class="pl-4 h-screen horizontal-scroll overflow-y-auto pt-4">
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
            </div>
          </div>
          <!-- padding -->
          <div class="padding mt-6 relative">
            <p class="text-sm font-medium text-gray-200">padding</p>

            <div class="flex flex-wrap gap-3 mt-4">
              <!-- padding -->
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
              <!-- padding_top -->
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

              <!-- padding_left -->
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
      hoverBgTrigger: false,
      hoverTextTrigger: false,
    });
    const TextPopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };
    const bgPopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };
    const hoverBgPopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };
    const hoverTextPopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };

    return {
      popupTriggers,
      TextPopup,
      bgPopup,
      hoverBgPopup,
      hoverTextPopup,
    };
  },

  data() {
    return {
      // dropdown selected value

      selected_values: {
        width: "w-64",
        button_text: "",
        image_link: "",
        hover_bg_color: "bg-blue-500",
        hover_text_color: "text-white",
        text_color: "text-gray-800",
        padding: "p-2",
        padding_top: "mt-6",
        padding_left: "pl-2",
        background_color: "",
        font_size: "",
        font_width: "",
      },

      selectTextColor: [
        { color: "bg-red-500", id: 1, value: "text-red-500" },
        { color: "bg-white", id: 2, value: "text-white" },
        { color: "bg-blue-600", id: 3, value: "text-blue-600" },
        { color: "bg-yellow-400", id: 4, value: "text-yellow-400" },
        { color: "bg-green-500", id: 5, value: "text-green-500" },
      ],
      selectHoverColor: [
        { color: "bg-green-700", id: 1, value: "bg-green-700" },
        { color: "bg-indigo-500", id: 2, value: "bg-indigo-500" },
        { color: "bg-pink-500", id: 3, value: "bg-pink-500" },
        { color: "bg-blue-700", id: 4, value: "bg-blue-700" },
        { color: "bg-blue-100	", id: 5, value: "bg-blue-100" },
      ],
      selectHoverTextColor: [
        { color: "bg-blue-100", id: 1, value: "text-blue-100" },
        { color: "bg-blue-700", id: 2, value: "text-blue-700" },
        { color: "bg-pink-500", id: 3, value: "text-pink-500" },
        { color: "bg-indigo-500", id: 4, value: "text-indigo-500" },
        { color: "bg-green-700", id: 5, value: "text-green-700" },
      ],
      selectBackgroundColor: [
        { color: "bg-indigo-500", id: 1 },
        { color: "bg-white", id: 2 },
        { color: "bg-gray-900", id: 3 },
        { color: "bg-yellow-400", id: 4 },
        { color: "bg-green-500", id: 5 },
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
        "w-24",
        "w-32",
        "w-40",
        "w-48",
        "w-56",
        "w-64",
        "w-72",
        "w-80",
        "w-96",
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
        "w-auto",
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

      padding: ["p-0", "p-1", "p-2", "p-3", "p-4", "p-5", "p-6", "p-7", "p-8"],

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
    };
  },

  // sending data to parent components
  methods: {
    sendChange() {
      this.$emit("sidebar-values", this.selected_values);
    },
    getTextColor(value) {
      this.selected_values.text_color = value;
    },
    getHoverTextColor(value) {
      this.selected_values.hover_text_color = value;
      this.hover_textColor = value;
    },
    getHoverBgColor(value) {
      this.selected_values.hover_bg_color = value;
    },
    getBackgroundColor(value) {
      this.selected_values.background_color = value;
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
      this.$emit("sidebar-values", this.selected_values);
    } catch (error) {
      console.log(error);
    }
  },

  //
  // this.$emit("sidebar-values", this.selected_values);
};
</script>

<style scoped>

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
