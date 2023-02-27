<template>
  <div>
    <div class="overflow-hidden">
      <ComponentNavbar />
      <div class="flex flex-row bg-gray-50">
        <div class="sidebar">
          <Sidebar />
        </div>
        <div class="card">
          <div class="flex items-center justify-center p-4">
            <!-- card start from here -->
            <div class="w-72 bg-gray-50 rounded-lg shadow-md">
              <div class="card-img w-full h-48">
                <img
                  src="https://images.pexels.com/photos/13471116/pexels-photo-13471116.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="image"
                  class="w-full rounded-t-lg overflow-hidden h-full object-cover"
                />
              </div>
              <div class="content-container mx-4 pt-5">
                <div class="heading">
                  <p class="text-2xl font-bold text-gray-900">Welcome 2023</p>
                </div>
                <div class="sub-heading">
                  <p class="text-sm text-gray-500 tracking-normal">
                    15-02-2023
                  </p>
                </div>
                <div class="mt-3 w-full">
                  <p class="leading-6 text-gray-700 text-base font-regular">
                    2023 is the current year, and is a common year starting on
                    Sunday.
                  </p>
                </div>
                <div class="pb-5 mt-3 flex items-center justify-end">
                  <p class="text-base cursor-pointer font-medium text-blue-500">
                    Read more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="toolbar">
          <CardToolbar v-on:card-values="getCardValue($event)" />
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
.flex .sidebar {
  flex: 1 1 13%;
}
.flex .card {
  flex-basis: 60%;
}
.flex .toolbar {
  flex: 1 1 27%;
}
</style>
