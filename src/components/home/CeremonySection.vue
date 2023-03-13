<script lang="ts" setup>
import MainSection from "@/components/MainSection.vue";
import { useUser } from "@/composables/useUser";
import EnterInviteCodePrompt from "@/components/invite_code/EnterInviteCodePrompt.vue";

const { has_user } = useUser();
</script>

<template>
  <MainSection id="ceremony" class="flex bg-red-50">
    <div class="flex-1 h-full hidden lg:flex items-center justify-center">
      <img src="/images/home/st-michael-chapel.jpg" alt="" />
    </div>

    <div class="flex-1 h-full flex flex-col justify-center items-center">
      <h2
        style="font-family: Dancing Script, serif"
        class="text-7xl text-red-800"
      >
        The Ceremony
      </h2>

      <div v-if="has_user" class="flex flex-col justify-center items-center">
        <p class="mt-20">TUESDAY, APRIL 18, 2023</p>
        <p>AT 2:30 PM</p>

        <p class="mt-20">St. Michael The Archangel Chapel</p>
        <p>Purok 4, Eden, Toril, Davao City</p>
      </div>

      <EnterInviteCodePrompt v-else></EnterInviteCodePrompt>
    </div>
  </MainSection>
</template>
