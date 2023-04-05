<template>
  <div>
    <div class="wrapper relative">
      <!-- menu -->
      <div
        class="py-1 px-3 absolute left-0 z-10 bg-blue-500"
        @click="toggleNav()"
        :class="[showButton ? 'block' : 'hidden']"
      >
        <button class="flex items-center justify-center p-1">
          <font-awesome-icon icon="fa-solid fa-bars" class="text-white" />
        </button>
      </div>
      <!-- menu close -->
      <!-- show button -->

      <aside :class="{ active: active }">
        <div class="navbar max-w-xs relative h-full border-r border-gray-700">
          <div
            class="absolute right-0 z-10 p-1 flex w-full cursor-pointer items-center flex-nowrap bg-gray-700 text-gray-300"
            @click="toggleNav()"
          >
            <div>
              <font-awesome-icon icon="fa-solid fa-xmark" class="pr-2 pl-2" />
            </div>
            <p>Close</p>
          </div>

          <div class="overflow-auto bg-gray-800 h-full">
            <div
              class="title text-lg pt-11 flex text-center items-center ml-5 font-medium sticky text-gray-100"
            >
              Components
            </div>
            <ul class="mt-5 ml-12">
              <li
                class="text-base mt-4 text-gray-300"
                v-for="item in components_name"
                :key="item.id"
              >
                <NuxtLink :to="item.link">
                  {{ item.name }}
                </NuxtLink>
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
      showButton: false,
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
  props: ["show"],
  mounted() {
    this.$parent.$on("toggleNav", () => {
      this.active = !this.active;
    });
  },
  methods: {
    toggleNav() {
      this.$parent.$emit("toggleNav");
      this.showButton = !this.showButton;
    },
  },
  computed: {},
};
</script>

<style scoped>
.active {
  visibility: visible;
  display: block;
  width: 14rem;
}

aside {
  width: 0;
  height: 100vh;
  visibility: hidden;
  transition: width 0.3s ease-in;
}
.nuxt-link-exact-active {
  color: #4299e1;
}
</style>
