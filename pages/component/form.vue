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
                class="w-80 bg-white px-6 rounded-lg border border-gray-300"
              >
                <div class="title pt-8">
                  <p class="text-2xl font-bold text-gray-800">
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
                      class="bg-blue-400 w-full text-center py-2 text-base text-white font-semibold rounded-md"
                    >
                      Sign up
                    </button>
                  </div>
                  <div class="account-exist mt-6 pb-8">
                    <p class="text-gray-400 text-sm">
                      Already have a account?
                      <span class="font-bold text-blue-400 cursor-pointer"
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
          <editForm v-on:card-values="getCardValue($event)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Toolsbar from "../../components/Toolsbar.vue";

export default {
  data() {
    return {
      value: "",
      button_text: "Create account",
    };
  },
  components: { Toolsbar },
  methods: {
    getCardValue(values) {
      this.value = values;
      this.button_text = values.button_text;
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
