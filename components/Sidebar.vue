<template>
  <div>
    <div class="wrapper relative">
      <!-- menu -->
      <div
        class="py-1 px-3 absolute right-0 z-10 bg-blue-500 rounded-b-xl"
        :class="{ active: active }"
      >
        <button @click="toggleNav()" class="flex items-center justify-center">
          <p class="text-base text-white mr-1 text-center font-medium">Menu</p>
          <font-awesome-icon icon="fa-solid fa-bars" class="text-white" />
        </button>
      </div>
      <!-- menu close -->
      <aside :class="{ active: active }">
        <div class="navbar w-56 max-w-xs relative h-screen rounded-br-3xl">
          <div class="overflow-auto bg-gray-100 h-full rounded-br-3xl">
            <div
              class="title text-lg pt-11 flex text-center items-center ml-5 font-medium sticky"
            >
              <unicon name="apps" fill="white" width="20" class="mr-2"></unicon
              >Components
            </div>
            <ul class="mt-5 ml-12">
              <li
                class="text-base mt-4 text-gray-800"
                v-for="item in components_name"
                :key="item.id"
              >
                <NuxtLink :to="item.link">{{ item.name }} </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: true,
      components_name: [
        { name: "Button", id: 1, link: "button" },
        { name: "Navbar", id: 2, link: "navbar" },
        { name: "Card", id: 3, link: "card" },
        { name: "Sidebar", id: 4, link: "sidebar" },
        { name: "Alert", id: 5, link: "alert" },
        { name: "Image", id: 6, link: "image" },
        { name: "Chip", id: 7, link: "chip" },
        { name: "Badge", id: 8, link: "badge" },
        { name: "Form", id: 9, link: "form" },
        { name: "Input field", id: 10, link: "input-field" },
        { name: "Footer", id: 11, link: "footer" },
      ],
    };
  },
  mounted() {
    this.$parent.$on("toggleNav", () => {
      this.active = !this.active;
    });
  },
  methods: {
    toggleNav() {
      this.$parent.$emit("toggleNav");
    },
  },
};
</script>

<style scoped>
.w-0 {
  width: 0;
  background-color: antiquewhite;
}
.active {
  display: block;
}

aside {
  display: none;
  height: 100vh;
}
</style>
