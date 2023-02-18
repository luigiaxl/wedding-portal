<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main class="h-screen p-32">
    <div class="flex h-full">
      <div class="flex-1 flex flex-col items-center justify-center">
        <div
          style="font-family: Sassy Frass;"
          class="text-9xl text-red-800 -ml-44"
        >Wagas</div>

        <div
          style="font-family: Sassy Frass;"
          class="text-9xl text-gray-400 -mt-10"
        >&</div>

        <div
          style="font-family: Sassy Frass;"
          class="text-9xl text-red-800 -mt-14 ml-48"
        >Salva</div>

        <div class="text-center">
          <span>The Wedding</span> <i class="fas fa-rings-wedding text-red-800"></i> 2023
        </div>
      </div>

      <div class="flex-1 overflow-hidden flex justify-center">
        <div class="h-full w-auto">
          <img src="/images/home/IMG_0673.jpg" alt="" class="min-h-full h-full max-w-none">
        </div>
      </div>

      <div class="absolute bottom-0 h-8 bg-red-900 opacity-75 w-full mx-4 -mb-4"></div>
      <div class="absolute right-0 h-full bg-red-900 opacity-75 w-8 my-4 -mr-4"></div>
    </div>
  </main>
</template>
