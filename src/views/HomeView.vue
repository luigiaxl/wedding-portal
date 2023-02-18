<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main class="h-screen lg:p-32">
    <div class="flex h-full">
      <div class="flex-1 flex lg:items-center justify-center">
        <div class="w-full mt-10 lg:mt-0 flex flex-col items-center lg:justify-center z-10">
          <div
            style="font-family: Sassy Frass;"
            class="relative text-9xl text-red-800 w-full lg:w-auto lg:-ml-44"
          >
            <div class="absolute top-8 w-full h-16 bg-white -ml-16 opacity-50 lg:hidden"></div>
            <span>Wagas</span>
          </div>

          <div
            style="font-family: Sassy Frass;"
            class="text-9xl text-gray-100 lg:text-gray-400 -mt-10"
          >&</div>

          <div
            style="font-family: Sassy Frass;"
            class="relative text-9xl text-red-800 w-full text-end pr-4 lg:pr-0 lg:text-center lg:w-auto -mt-14 lg:ml-40"
          >
            <div class="absolute top-8 w-full h-16 my-auto bg-white ml-40 opacity-50 lg:hidden"></div>
            <span>Salva</span>
          </div>

          <div class="flex-1 flex items-end">
            <div class="text-center text-white lg:text-inherit px-2">
              <span>The Wedding</span> <i class="fas fa-rings-wedding text-red-800"></i> 2023
            </div>
          </div>
        </div>
      </div>

      <div class="flex-1 overflow-hidden absolute inset-0 z-0 lg:inset-y-auto lg:relative flex justify-center">
        <div class="h-full w-auto">
          <img src="/images/home/IMG_0673.jpg" alt="" class="min-h-full h-full max-w-none">
        </div>
      </div>

      <div class="absolute lg:block bottom-0 h-8 bg-red-900 opacity-25 lg:opacity-75 w-full lg:mx-4 lg:-mb-4"></div>
      <div class="absolute hidden lg:block right-0 h-full bg-red-900 opacity-75 w-8 lg:my-4 lg:-mr-4"></div>
    </div>
  </main>
</template>
