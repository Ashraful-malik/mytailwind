<template>
  <div>
    <div class="navbar bg-gray-900">
      <nav
        class="w-11/12 m-auto flex items-center justify-between h-16 flex-wrap"
      >
        <div class="logo">
          <a href="#" class="flex items-center">
            <img src="@/assets/images/Logo.svg" alt="Logo" class="w-8" />
            <p class="text-xl ml-2 font-bold pt-2 text-white">Mytailwind</p>
          </a>
        </div>
        <ul class="flex items-center justify-center">
          <li class="text-gray-200"><a href="#">Home</a></li>
          <li class="ml-8 text-gray-200"><a href="#">Feature</a></li>
          <button
            class="px-5 py-1 text-gray-50 font-medium ml-8 rounded-md gradient_border"
          >
            Get started
            <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </button>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
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
/* background: linear-gradient(178.89deg, #35EC94 -20.07%, #4C6FEA 127.12%); */

/* background: linear-gradient(178.89deg, #35EC94 -20.07%, #4C6FEA 127.12%); */
</style>
