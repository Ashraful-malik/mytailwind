<template>
  <div v-if="loading" class="loading-page bg-gray-800">
    <div class="svg">
      <svg
        width="91"
        height="95"
        viewBox="0 0 91 95"
        fill="none"
        id="animation"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M45.726 0L65.3888 38.1429L72.3109 26.058L90.178 68.8519C90.8395 70.4362 90.7959 72.2271 90.0582 73.7774L79.9679 94.9823H61.4148L59.3732 89.7017L54.8362 94.9823H35.1782L31.2641 89.2878L27.35 94.9823H12.3429L0.759683 74.1177C-0.206181 72.3779 -0.253752 70.2741 0.632484 68.4924L21.221 27.1015L26.3989 44.3651L45.726 0ZM46.1355 12.5693L25.4626 60.0237L19.9738 41.7234L5.46321 70.8953C5.36813 71.0865 5.37323 71.3122 5.47686 71.4989L15.5186 89.587H24.5115L31.2641 79.7627L38.0166 89.587H52.3586L61.155 79.3487L65.1133 89.587H76.5602L85.1863 71.4592C85.2655 71.2928 85.2702 71.1007 85.1992 70.9307L71.5506 38.2406L65.1393 49.4339L46.1355 12.5693Z"
          fill="url(#paint0_linear_223_32)"
          stroke="#35ec94"
          stroke-width="1.5"
        />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>
<style scoped>
.loading-page {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  z-index: 100;
}

#animation {
  stroke-dasharray: 360;
  stroke-dashoffset: 360;
  animation: line-animation 3s infinite ease forwards 0.3s;
}
@keyframes line-animation {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
