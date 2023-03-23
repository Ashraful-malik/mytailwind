<template>
  <div>
    <footer class="bg-gray-900 w-full mt-32">
      <div
        class="footer_container w-3/5 m-auto flex items-baseline justify-between text-white py-10"
      >
        <!-- page links -->
        <div class="page_links">
          <p class="mb-3 text-base font-medium text-gray-300">Links</p>
          <ul
            class="flex flex-col"
            v-for="pageLink in pageLinks"
            :key="pageLink.id"
          >
            <li class="text-gray-400 font-normal text-sm mb-2">
              <a :href="pageLink.link"> {{ pageLink.name }}</a>
            </li>
          </ul>
        </div>

        <!-- contact links -->
        <div
          class=" "
          v-for="contactLink in contactLinks"
          :key="contactLink.id"
        >
          <p class="mb-3 text-base font-medium text-gray-300">
            {{ contactLink.name }}
          </p>
          <p class="text-blue-500 font-normal">
            <a href="mailto:mytailwind.inbox@gmail.com" title="gmail"
              >mytailwind.inbox@gmail.com</a
            >
          </p>
        </div>

        <!-- social links -->
        <div class="social_links">
          <p class="mb-3 text-base font-medium text-gray-300">Social links</p>
          <ul
            class="flex flex-col"
            v-for="socialLink in socialLinks"
            :key="socialLink.id"
          >
            <li class="text-gray-400 font-normal text-sm mb-2">
              <p>
                <a
                  :href="socialLink.link"
                  :title="socialLink.name"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ socialLink.name
                  }}<font-awesome-icon
                    icon="fa-solid fa-arrow-up-right-from-square"
                    class="pl-2"
                  />
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageLinks: [
        { id: 1, name: "Home", link: "#home" },
        { id: 2, name: "Features", link: "#features" },
      ],
      contactLinks: [
        { id: 1, name: "Email", link: "mytailwind.inbox@gmail.com" },
      ],

      socialLinks: [
        {
          id: 1,
          name: "Instagram",
          link: "https://www.instagram.com/devxmedia/",
        },
        {
          id: 2,
          name: "Github",
          link: "https://github.com/Ashraful-malik/mytailwind",
        },
      ],
    };
  },
};
</script>

<style></style>
