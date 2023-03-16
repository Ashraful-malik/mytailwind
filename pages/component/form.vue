<template>
  <div>
    <div class="overflow-hidden">
      <ComponentNavbar />
      <div class="flex flex-row bg-gray-50">
        <div class="sidebar">
          <Sidebar />
        </div>
        <div class="chips">
          <div class="flex items-center justify-center p-4 w-full h-4/5">
            <div class="form">
              <form
                class="w-80 bg-white px-6"
                :class="[
                  value.box_shadow,
                  value.border_color,
                  value.border_width,
                  value.border_radius,
                  value.width,
                  value.height,
                ]"
              >
                <div class="title pt-8">
                  <p
                    class="text-2xl font-bold text-gray-800"
                    :class="value.text_color"
                  >
                    Create a free account!
                  </p>
                </div>
                <div class="input-forms mt-8">
                  <div class="field-1">
                    <p class="mb-3 text-base font-regular text-gray-600">
                      Email address
                    </p>
                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      class="w-full h-9 pl-2 text-gray-800 text-sm font-medium rounded-md bg-white border focus:outline-none focus:ring focus:border-blue-400"
                    />
                  </div>
                  <div class="field-2 mt-6">
                    <p class="mb-3 text-base font-regular text-gray-600">
                      Password
                    </p>
                    <input
                      type="password"
                      placeholder="Password"
                      class="w-full h-9 pl-2 text-gray-800 text-sm font-medium rounded-md bg-white border focus:outline-none focus:ring focus:border-blue-400"
                    />
                  </div>
                  <div class="button mt-8 block">
                    <button
                      type="button"
                      class="w-full text-center py-2 text-base font-semibold rounded-md"
                      :class="[
                        value.button_text_color,
                        value.button_background_color,
                      ]"
                    >
                      Sign up
                    </button>
                  </div>
                  <div class="account-exist mt-6 pb-8">
                    <p class="text-gray-400 text-sm">
                      Already have a account?
                      <span
                        class="font-bold cursor-pointer"
                        :class="value.text_color"
                        >Sign-in</span
                      >
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="toolbar">
          <editForm v-on:form-values="getCardValue($event)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    getCardValue(values) {
      this.value = values;
    },
  },
};
</script>

<style scoped>
.sidebar {
  flex: 1 1 13%;
}
.chips {
  flex-basis: 60%;
}
.toolbar {
  flex: 1 1 27%;
}
</style>
