<script lang="ts" setup>
import { onMounted, ref } from "vue";
import FadeInLetters from "@/components/animations/FadeInLetters.vue";

const imgContainer = ref<HTMLDivElement>();
const imgClass = ref<string>();

onMounted(() => {
  onWindowResize();

  window.addEventListener("resize", onWindowResize);
});

const onWindowResize = () => {
  if (!imgContainer.value) return;

  const width = imgContainer.value.clientWidth;
  const height = imgContainer.value.clientHeight;

  // if (width > height) {
  //   imgClass.value = "min-h-full h-full max-w-none";
  // } else {
  // }
  imgClass.value = "min-w-full w-full max-h-none";
};
</script>

<template>
  <main class="h-screen">
    <div class="flex h-full">
      <div class="w-full lg:w-3/5 flex lg:items-center justify-center">
        <div
          class="w-full mt-10 lg:mt-0 flex flex-col items-center lg:justify-center z-10"
        >
          <div
            style="font-family: Sassy Frass, serif"
            class="relative text-9xl text-red-800 w-full lg:w-auto lg:-ml-44"
          >
            <div
              class="absolute top-8 w-full h-16 bg-white -ml-16 opacity-50 lg:hidden"
            ></div>
            <FadeInLetters>Wagas</FadeInLetters>
          </div>

          <div
            style="font-family: Sassy Frass, serif"
            class="text-9xl text-gray-100 lg:text-gray-400 -mt-10"
          >
            <FadeInLetters>&</FadeInLetters>
          </div>

          <div
            style="font-family: Sassy Frass, serif"
            class="relative text-9xl text-red-800 w-full text-end pr-4 lg:pr-0 lg:text-center lg:w-auto -mt-14 lg:ml-40"
          >
            <div
              class="absolute top-8 w-full h-16 my-auto bg-white ml-40 opacity-50 lg:hidden"
            ></div>
            <FadeInLetters>Salva</FadeInLetters>
          </div>

          <div class="flex-1 flex items-end">
            <div class="text-center text-white lg:text-inherit px-2">
              <span>The Wedding</span>
              <i class="fas fa-rings-wedding text-red-800"></i> 2023
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex-1 overflow-hidden absolute inset-0 z-0 lg:inset-y-auto lg:relative flex justify-center"
      >
        <div class="w-full" ref="imgContainer">
          <img
            src="/images/home/IMG_0673.jpg"
            alt=""
            :class="imgClass"
          />
        </div>
      </div>
    </div>
  </main>
</template>
