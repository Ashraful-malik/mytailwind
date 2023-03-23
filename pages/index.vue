<template>
  <div>
    <div class="homepage bg-gray-800">
      <Navbar />

      <div class="home_container w-11/12 m-auto dropdown_scrollbar" id="home">
        <article>
          <div class="flex flex-col items-center justify-center mt-12">
            <img
              src="@/assets/images/Logo.svg"
              alt="mytailwd logo"
              class="w-14"
            />
            <h1 class="font-semibold text-2xl text-blue-100">MYTAILWIND</h1>
            <p class="mt-4 text-gray-400 text-center w-2/5 text-lg font-normal">
              Mytailwind help you to creating tailwind components with few
              clicks, which saves lots of time and effort.
            </p>
            <div class="button mt-4">
              <nuxt-link to="component/button">
                <button
                  type="button"
                  class="px-4 py-2 gradient_background rounded-lg"
                >
                  Get started
                  <font-awesome-icon icon="fa-solid fa-arrow-right" />
                </button>
              </nuxt-link>
            </div>
          </div>
          <div class="app_image mt-40 p-3">
            <figure>
              <img
                src="@/assets/images/mytailwind.png"
                alt="mytailwind"
                class="border border-gray-600 rounded-2xl drop-shadow-2xl"
              />
            </figure>
          </div>
        </article>
        <!-- feature section -->
        <div class="features mt-24 w-full" id="features">
          <div class="title">
            <h2 class="text-3xl font-semibold text-gray-100">Features</h2>
          </div>

          <div
            class="features_section flex items-baseline flex-wrap gap-8 mt-8"
          >
            <div
              class="gradient_border p-4 w-80 bg-gray-900 h-40 rounded-lg border border-gray-600"
              v-for="feature in features"
              :key="feature.id"
            >
              <h3 class="text-xl font-semibold text-gray-300">
                {{ feature.title }}
              </h3>
              <p class="text-gray-400 text-sm font-normal pt-2">
                {{ feature.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      features: [
        {
          id: 1,
          title: "Copy code",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        },
        {
          id: 2,
          title: "Easy customizable components",
          content: " Lorem ipsum dolor sit amet consectetur adipisicing elit",
        },
        {
          id: 3,
          title: "Easy to use",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        },
        {
          id: 4,
          title: "Free",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        },
      ],
    };
  },
};
</script>
<style>
html {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

.gradient_background {
  background: linear-gradient(178.89deg, #35ec94 -20.07%, #4c6fea 127.12%);
  color: white;
}
</style>
