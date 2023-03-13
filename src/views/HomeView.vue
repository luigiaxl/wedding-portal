<script lang="ts" setup>
import { nextTick, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import FadeInLetters from "@/components/animations/FadeInLetters.vue";
import CustomLink from "@/components/buttons/CustomLink.vue";
import MainSection from "@/components/MainSection.vue";
import CeremonySection from "@/components/home/CeremonySection.vue";
import ReceptionSection from "@/components/home/ReceptionSection.vue";
import ScrollNavs from "@/components/buttons/ScrollNavs.vue";
import { useUser } from "@/composables/useUser";
import EnterInviteCodePrompt from "@/components/invite_code/EnterInviteCodePrompt.vue";

const imgContainer = ref<HTMLDivElement>();
const imgClass = ref<string>();
const route = useRoute();
const { has_user, user } = useUser();

onMounted(() => {
  onWindowResize();

  window.addEventListener("resize", onWindowResize);

  const hashbang = route.hash;
  nextTick(() => {
    scrollToAnchor(hashbang);
  });
});

const onWindowResize = () => {
  if (!imgContainer.value) return;

  imgClass.value = "min-w-full w-full max-h-none";
};

const scrollToAnchor = (hashbang: string) => {
  location.hash = hashbang;
  const el = <HTMLElement>document.querySelector(hashbang);

  if (el) {
    window.scrollTo(0, el.offsetTop);
  }
};
</script>

<template>
  <main class="h-screen snap-y snap-mandatory">
    <MainSection class="flex" id="home">
      <div class="w-full lg:w-3/5 flex lg:items-center justify-center">
        <div
          class="w-full mt-10 lg:mt-0 flex flex-col items-center justify-center z-10"
        >
          <div
            style="font-family: Sassy Frass, serif"
            class="relative text-9xl text-red-800 -ml-14"
          >
            <FadeInLetters>Wagas</FadeInLetters>
          </div>

          <div
            style="font-family: Sassy Frass, serif"
            class="text-9xl text-gray-400 -mt-10"
          >
            <FadeInLetters>&</FadeInLetters>
          </div>

          <div
            style="font-family: Sassy Frass, serif"
            class="relative text-9xl text-red-800 pr-0 text-center w-auto -mt-14 ml-40"
          >
            <FadeInLetters>Salva</FadeInLetters>
          </div>

          <div class="flex items-end mt-10">
            <div class="text-center px-2">
              <span>The Wedding </span>
              <i class="fas fa-rings-wedding text-red-800"></i> 2023
            </div>
          </div>

          <nav class="mt-10">
            <CustomLink class="mx-6" to="/">Gallery</CustomLink>
            <CustomLink
              class="mx-6"
              to="#ceremony"
              @click.prevent="scrollToAnchor('#ceremony')"
              >Details</CustomLink
            >
            <CustomLink
              v-if="has_user"
              class="mx-6"
              :to="{
                path: `/invitation/${user ? user.invite_code : ''}`,
              }"
              >Your Invitation</CustomLink
            >
          </nav>

          <EnterInviteCodePrompt
            v-if="!has_user"
            class="mt-16"
            message="To view your invitation, enter your invite code:"
          ></EnterInviteCodePrompt>
        </div>
      </div>

      <div
        class="hidden lg:flex flex-1 overflow-hidden absolute inset-0 z-0 lg:inset-y-auto lg:relative justify-center"
      >
        <div class="w-full" ref="imgContainer">
          <img src="/images/home/IMG_0673.jpg" alt="" :class="imgClass" />
        </div>
      </div>
    </MainSection>

    <CeremonySection></CeremonySection>

    <ReceptionSection></ReceptionSection>

    <ScrollNavs
      class="z-40"
      :anchors="['#home', '#ceremony', '#reception']"
    ></ScrollNavs>
  </main>
</template>
