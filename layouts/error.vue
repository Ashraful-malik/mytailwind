<template>
  <div>
    <div
      class="w-full h-screen flex items-center justify-center bg-gray-800 flex-col"
    >
      <h1 v-if="error.statusCode === 404" class="flex flex-col items-center">
        <p class="text-9xl text-gray-300 font-bold">404</p>
        <p class="mt-3 text-3xl font-normal text-gray-100">Page not found</p>
      </h1>
      <h1 v-else class="text-3xl font-normal text-gray-100">
        An error occurred
      </h1>

      <NuxtLink
        to="/"
        class="px-6 py-2 text-gray-900 mt-5 text-base gradient_background rounded-md font-medium"
        >Home page</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error", // you can set a custom layout for the error page
};
</script>
