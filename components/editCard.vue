<template>
  <tabNavigation>
    <section class="bg-gray-800 w-96">
      <!-- Edit tab data -->
      <Tab name="Edit" selected="true" id="Edit">
        <div class="pl-4 h-screen horizontal-scroll overflow-y-auto pt-4">
          <!-- button text -->

          <p class="text-gray-200 text-sm font-medium mb-2">Button text</p>
          <input
            type="text"
            maxlength="20"
            placeholder="Enter your button text"
            class="h-8 w-3/4 bg-gray-600 pl-2 text-gray-50 rounded"
            v-model="selected_values.button_text"
            v-on:input="sendChange"
          />

          <!-- image input box -->
          <div class="image_text mt-6">
            <p class="text-gray-200 text-sm font-medium mb-2">Image link</p>
            <input
              type="link"
              placeholder="Paste your image link"
              class="h-8 w-3/4 bg-gray-600 pl-2 text-gray-50 rounded"
              v-model="selected_values.image_link"
              v-on:input="sendChange"
            />
          </div>

          <!-- Title input box -->
          <div class="title_text mt-6">
            <p class="text-gray-200 text-sm font-medium mb-2">Title text</p>
            <input
              type="text"
              maxlength="20"
              placeholder="Your title"
              class="h-8 w-3/4 bg-gray-600 pl-2 text-gray-50 rounded"
              v-model="selected_values.title_text"
              v-on:input="sendChange"
            />
          </div>
          <div class="image_text mt-6">
            <p class="text-gray-200 text-sm font-medium mb-2">Subtitle text</p>
            <input
              type="text"
              maxlength="30"
              placeholder="Your subtitle"
              class="h-8 w-3/4 bg-gray-600 pl-2 text-gray-50 rounded"
              v-model="selected_values.subtitle_text"
              v-on:input="sendChange"
            />
          </div>

          <!-- Card content textarea -->
          <div class="image_text mt-6">
            <p class="text-gray-200 text-sm font-medium mb-2">Card text</p>
            <textarea
              name="card-content"
              cols="5"
              rows="5"
              placeholder="Card Content..."
              v-model="selected_values.card_content_text"
              v-on:input="sendChange"
              class="w-3/4 bg-gray-600 pl-2 text-gray-50 rounded"
            ></textarea>
          </div>
          <div class="mb-4"></div>
        </div>
      </Tab>
    </section>

    <!-- Style Tab data -->

    <section class="tab2">
      <Tab name="Style" id="Style">
        <div class="pl-4 h-screen horizontal-scroll overflow-y-auto pt-4">
          <!-- title color -->
          <div class="text_color">
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

          <!-- subtitle color -->
          <div class="text_color mt-6">
            <p class="text-sm font-medium mb-2 text-gray-200">Subtitle color</p>
            <div class="flex gap-3 w-full flex-wrap text-sm mt-4 items-center">
              <div
                class="flex gap-3"
                v-for="textColor in selectTextColor"
                :key="textColor.id"
              >
                <div
                  :class="textColor.color"
                  class="color1 p-3 rounded-full cursor-pointer"
                  @click="getSubtitleColor(textColor.value)"
                  v-on:click="sendChange"
                ></div>
              </div>
              <div class="color_selector flex items-center">
                <button
                  type="button"
                  value="1"
                  class="bg-blue-500 px-3 py-1 text-white rounded-full flex items-center content-center text-center"
                  @click="() => subTitlePopup('subTitleTrigger')"
                  v-on:click="sendChange"
                >
                  <p class="text-center">More Colors</p>
                </button>
                <!-- sending data in popup component  -->
                <textColorPopup
                  v-if="popupTriggers.subTitleTrigger"
                  :subTitlePopup="() => subTitlePopup('subTitleTrigger')"
                  :text-color="colors"
                  v-on:subtitle-color="getSubtitleColor($event)"
                />
              </div>
            </div>
          </div>

          <!-- card content  color -->
          <div class="card_content_text_color mt-6">
            <p class="text-sm font-medium mb-2 text-gray-200">
              Card content color
            </p>
            <div class="flex gap-3 w-full flex-wrap text-sm mt-4 items-center">
              <div
                class="flex gap-3"
                v-for="cardContentColor in selectCardContentColor"
                :key="cardContentColor.id"
              >
                <div
                  :class="cardContentColor.color"
                  class="color1 p-3 rounded-full cursor-pointer"
                  @click="getCardContentColor(cardContentColor.value)"
                  v-on:click="sendChange"
                ></div>
              </div>
              <div class="color_selector flex items-center">
                <button
                  type="button"
                  value="1"
                  class="bg-blue-500 px-3 py-1 text-white rounded-full flex items-center content-center text-center"
                  @click="() => cardContentPopup('contentColorTrigger')"
                  v-on:click="sendChange"
                >
                  <p class="text-center">More Colors</p>
                </button>
                <!-- sending data in popup component  -->
                <textColorPopup
                  v-if="popupTriggers.contentColorTrigger"
                  :CardContentPopup="
                    () => cardContentPopup('contentColorTrigger')
                  "
                  :text-color="colors"
                  v-on:card-content-color="getCardContentColor($event)"
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

          <!-- button color -->
          <div class="text_color mt-6">
            <p class="text-sm font-medium mb-2 text-gray-200">Button color</p>
            <div class="flex gap-3 w-full flex-wrap text-sm mt-4 items-center">
              <div
                class="flex gap-3"
                v-for="textColor in selectTextColor"
                :key="textColor.id"
              >
                <div
                  :class="textColor.color"
                  class="color1 p-3 rounded-full cursor-pointer"
                  @click="getButtonColor(textColor.value)"
                  v-on:click="sendChange"
                ></div>
              </div>
              <div class="color_selector flex items-center">
                <button
                  type="button"
                  value="1"
                  class="bg-blue-500 px-3 py-1 text-white rounded-full flex items-center content-center text-center"
                  @click="() => buttonColorPopup('buttonColorTrigger')"
                  v-on:click="sendChange"
                >
                  <p class="text-center">More Colors</p>
                </button>
                <!-- sending data in popup component  -->
                <textColorPopup
                  v-if="popupTriggers.buttonColorTrigger"
                  :buttonColorPopup="
                    () => buttonColorPopup('buttonColorTrigger')
                  "
                  :text-color="colors"
                  v-on:button-color="getButtonColor($event)"
                />
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
                  @click="getBorderRadius(borderRadius)"
                  v-on:click="sendChange"
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
                  v-on:click="sendChange"
                >
                  {{ fontWeight.text }}
                </div>
              </div>
            </div>
          </div>
          <!-- box shadow -->
          <div class="box_shadow mt-6 mb-8">
            <p class="text-sm font-medium mb-2 text-gray-200">Box shadow</p>
            <div class="flex gap-3 w-full flex-wrap text-sm mt-4 items-center">
              <div v-for="boxShadow in selectBoxShadow" :key="boxShadow.id">
                <div
                  class="rounded-md w-10 h-10 bg-gray-200 cursor-pointer"
                  @click="getBoxShadow(boxShadow.value)"
                  :class="boxShadow.value"
                  v-on:click="sendChange"
                ></div>
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
      contentColorTrigger: false,
      borderColorTrigger: false,
      subTitleTrigger: false,
      buttonColorTrigger: false,
    });
    const TextPopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };

    const cardContentPopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };

    const subTitlePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };
    const buttonColorPopup = (trigger) => {
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
      cardContentPopup,
      borderColorPopup,
      subTitlePopup,
      buttonColorPopup,
    };
  },
  data() {
    return {
      // dropdown selected value

      selected_values: {
        width: "w-72",
        button_text: "Read more",
        image_link:
          "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        title_text: "Welcome 2023",
        subtitle_text: "15-02-2023",
        card_content_text:
          "2023 is the current year, and is a common year starting on Sunday",
        text_color: "text-gray-700",
        card_content_color: "text-gray-700",
        subtitle_text_color: "text-gray-500",
        padding: "p-4",
        padding_top: "pt-5",
        padding_bottom: "",
        background_color: "bg-gray-50",
        border_radius: "",
        border_width: "",
        border_color: "",
        font_size: "text-2xl",
        font_width: "font-bold",
        box_shadow: "shadow-md",
        button_color: "text-blue-700",
        subtitle_color: "text-gray-400",
      },

      selectTextColor: [
        { color: "bg-red-500", id: 1, value: "text-red-500" },
        { color: "bg-white", id: 2, value: "text-white" },
        { color: "bg-blue-600", id: 3, value: "text-blue-600" },
        { color: "bg-yellow-400", id: 4, value: "text-yellow-400" },
        { color: "bg-green-500", id: 5, value: "text-green-500" },
      ],
      selectCardContentColor: [
        { color: "bg-gray-50", id: 1, value: "text-gray-50" },
        { color: "bg-gray-200", id: 2, value: "text-gray-200" },
        { color: "bg-gray-400", id: 3, value: "text-gray-400" },
        { color: "bg-gray-500", id: 4, value: "text-gray-500" },
        { color: "bg-gray-200", id: 5, value: "text-gray-50" },
      ],
      selectBackgroundColor: [
        { color: "bg-indigo-500", id: 1 },
        { color: "bg-white", id: 2 },
        { color: "bg-gray-900", id: 3 },
        { color: "bg-yellow-400", id: 4 },
        { color: "bg-green-500", id: 5 },
      ],

      selectBorderRadius: [
        { value: "rounded-none", radius_value: "none", id: 1 },
        { value: "rounded", radius_value: "rounded", id: 2 },
        { value: "rounded-md", radius_value: "md", id: 4 },
        { value: "rounded-xl", radius_value: "xl", id: 5 },
        { value: "rounded-2xl", radius_value: "2xl", id: 6 },
        { value: "rounded-3xl", radius_value: "3xl", id: 7 },
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
      selectBorderWidth: [
        { value: "border", id: 1 },
        { value: "border-0", id: 2 },
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

      //Text color
      colors: [
        { color: "bg-transparent", value: "text-transparent", id: 1 },
        { color: "bg-current", value: "text-current", id: 2 },
        { color: "bg-white", value: "text-white", id: 3 },
        { color: "bg-black", value: "text-black", id: 4 },
        { color: "bg-gray-50", value: "text-gray-50", id: 5 },
        { color: "bg-gray-100", value: "text-gray-100", id: 6 },
        { color: "bg-gray-200", value: "text-gray-200", id: 7 },
        { color: "bg-gray-300", value: "text-gray-300", id: 8 },
        { color: "bg-gray-400", value: "text-gray-400", id: 9 },
        { color: "bg-gray-500", value: "text-gray-500", id: 10 },
        { color: "bg-gray-600", value: "text-gray-600", id: 11 },
        { color: "bg-gray-700", value: "text-gray-700", id: 12 },
        { color: "bg-gray-800", value: "text-gray-800", id: 13 },
        { color: "bg-gray-900", value: "text-gray-900", id: 14 },
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
        { color: "bg-red-100", value: "text-red-100", id: 91 },
        { color: "bg-red-200", value: "text-red-200", id: 92 },
        { color: "bg-red-300", value: "text-red-300", id: 93 },
        { color: "bg-red-400", value: "text-red-400", id: 94 },
        { color: "bg-red-500", value: "text-red-500", id: 95 },
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
        "w-auto",
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
    };
  },

  // sending data to parent components
  methods: {
    sendChange() {
      this.$emit("card-values", this.selected_values);
    },
    getTextColor(value) {
      this.selected_values.text_color = value;
    },
    getCardContentColor(value) {
      this.selected_values.card_content_color = value;
    },
    getBackgroundColor(value) {
      this.selected_values.background_color = value;
    },
    getBorderRadius(value) {
      this.selected_values.border_radius = value;
    },
    getBorderColor(value) {
      this.selected_values.border_color = value;
    },
    getBorderWidth(value) {
      this.selected_values.border_width = value;
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
    getButtonColor(value) {
      this.selected_values.button_color = value;
    },
    getSubtitleColor(value) {
      this.selected_values.subtitle_color = value;
    },
  },
  mounted() {
    try {
      this.$emit("card-values", this.selected_values);
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
