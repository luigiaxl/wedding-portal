<script lang="ts" setup>
import MainSection from "@/components/MainSection.vue";
import { useUser } from "@/composables/useUser";
import EnterInviteCodePrompt from "@/components/invite_code/EnterInviteCodePrompt.vue";

const { has_user } = useUser();
</script>

<template>
  <MainSection id="reception" class="flex h-full">
    <div class="flex-1 h-full flex flex-col justify-center items-center">
      <h2
        style="font-family: Dancing Script, serif"
        class="text-7xl text-red-800"
      >
        The Reception
      </h2>

      <div v-if="has_user" class="flex flex-col justify-center items-center">
        <p class="mt-20">AT 5:00 PM - 9:00 PM</p>

        <p class="mt-20">Vista Restaurant</p>
        <p>Eden Nature Park and Resort</p>

        <p class="mt-10">Eden, Toril, Davao City</p>
      </div>

      <EnterInviteCodePrompt v-else></EnterInviteCodePrompt>
    </div>

    <div class="flex-1 h-full hidden lg:flex items-center justify-center">
      <div class="translate-y-40 translate-x-10 z-20">
        <img src="/images/home/eden-resaurant1.jpg" alt="" />
      </div>
      <div class="-translate-y-32 -translate-x-10 z-10">
        <img src="/images/home/eden-restaurant2.jpg" alt="" />
      </div>
    </div>
  </MainSection>
</template>
