<script lang="ts" setup>
import { onMounted, ref } from "vue";

const scrollToTopButton = ref<HTMLButtonElement>();

onMounted(() => {
  window.onscroll = handleScroll;
});

const handleScroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.value!.style.display = "block";
  } else {
    scrollToTopButton.value!.style.display = "none";
  }
};

const scrollToTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
</script>

<template>
  <button
    ref="scrollToTopButton"
    class="rounded-full fixed bottom-6 right-6 bg-white flex justify-center items-center bg-red-800 hidden"
    @click="scrollToTop"
  >
    <i class="fas fa-arrow-circle-up fa-2x text-white"></i>
  </button>
</template>
