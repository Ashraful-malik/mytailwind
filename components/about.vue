<template>
  <!-- About website -->
  <div class="lg:mt-40 mt-20 w-full bg-gray-900" id="about">
    <div
      class="about_section flex lg:items-center lg:flex-wrap w-11/12 m-auto gap-5 lg:gap-3 p-4 flex-col lg:flex-row"
    >
      <div
        :class="`${about.width}`"
        class="lg:p-4 lg:h-52 rounded-lg lg:mr-11"
        v-for="about in aboutWebsite"
        :key="about.id"
      >
        <article>
          <h1 class="text-xl font-semibold text-gray-300">
            {{ about.title }}
          </h1>
          <p class="text-gray-400 text-base font-normal pt-2">
            {{ about.paragraph }}
          </p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutWebsite: [
        {
          id: 1,
          title: "What is Mytailwind?",
          flexBasis: "basis-32",
          width: "lg:w-2/5",
          paragraph:
            "Mytailwind is a website that allows you to easily copy and customize Tailwind components with just a few clicks. No more wasting time searching for the perfect code snippet or struggling to get your design just right – Mytailwind has it all.",
        },
        {
          id: 2,
          title: "How Does it Work?",
          flexBasis: "basis-32",
          width: "lg:w-2/5",
          paragraph:
            "First, choose the component you want to use from our extensive library. Then, customize it to fit your specific needs – change colors, fonts, sizes, and more. Once you’re happy with your design, simply copy the code and paste it into your project. It’s that easy!",
        },
        {
          id: 3,
          title: "Why Choose Mytailwind?",
          flexBasis: "basis-12",
          width: "lg:w-2/5",
          paragraph:
            " With Mytailwind, you’ll save countless hours on web development. Our easy-to-use platform and extensive library of components make designing your website a breeze. Plus, with the ability to customize each component to fit your specific needs, you’ll have a unique design that stands out from the crowd.",
        },
      ],
    };
  },
};
</script>
