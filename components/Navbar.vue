<template>
  <div>
    <div class="navbar bg-gray-900">
      <nav
        class="w-11/12 m-auto flex items-center justify-between h-16 flex-wrap"
      >
        <div class="logo">
          <nuxt-link to="/" class="flex items-center">
            <img src="@/assets/images/Logo.svg" alt="Logo" class="w-8" />
            <p class="text-xl ml-2 font-bold pt-2 text-white">Mytailwind</p>
          </nuxt-link>
        </div>

        <ul class="lg:flex items-center justify-center hidden">
          <li class="text-gray-200 ml-6" v-for="link in links" :key="link.id">
            <a :href="link.link">{{ link.name }}</a>
          </li>

          <li>
            <nuxt-link
              to="component/button"
              class="px-5 py-2 text-gray-50 font-medium ml-8 rounded-md gradient_border"
            >
              Get started
              <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { id: 1, name: "Home", link: "#home" },
        { id: 2, name: "Features", link: "#features" },
        { id: 3, name: "About", link: "#about" },
      ],
    };
  },
};
</script>

<style scoped>
.gradient_border {
  background: #ffc857;
  border-radius: 5px;
  color: rgb(26, 26, 26);
}
</style>
