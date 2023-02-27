<template>
  <section>
    <header class="tabs bg-gray-900 w-96 h-10 flex items-center text-center">
      <ul class="flex items-center h-auto w-11/12 m-auto">
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          class="text-base hover:bg-gray-800 cursor-pointer hover:text-blue-500 px-8 py-2 font-normal text-gray-100"
          @click="selectTab(tab)"
          :class="{ 'is-Active': tab.isActive }"
        >
          <div class="nab-items text-center spacing-" @click="selectTab(tab)">
            {{ tab.name }}
          </div>
        </li>
      </ul>
    </header>
    <section class="tabs-details w-96">
      <div class="transition bg-gray-800">
        <slot></slot>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tabs: [],
    };
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name;
        console.log(tab.name);
      });
    },
  },

  created() {
    this.tabs = this.$children;
  },
};
</script>

<style>
.transition {
  /* background: pink; */
  transition: display 2s ease-in-out;
}
.is-Active {
  background: #1f2937;
  color: #3b82f6;
}
</style>
