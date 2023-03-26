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

          <nuxt-link to="component/button">
            <button
              class="px-5 py-1 text-gray-50 font-medium ml-8 rounded-md gradient_border"
            >
              Get started
              <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </button>
          </nuxt-link>
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
  border: 1px solid;
  color: #35ec94;
  border-radius: 5px;
  background: none;
  text-decoration: dashed;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    178.89deg,
    #35ec94 -20.07%,
    #4c6fea 127.12%
  );
}
</style>
