<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const props = defineProps<{
  anchors: Array<string>;
}>();

const activeHashbang = ref("#home");
const scrollSpyValue = ref<string>();
const route = useRoute();

const scrollNavsContainer = ref<HTMLButtonElement>();

onMounted(() => {
  scrollSpyValue.value = "";
  window.addEventListener("scroll", handleNavScroll);
});

watch(
  () => route.hash,
  (hashbang: string) => {
    if (!hashbang) {
      activeHashbang.value = "#home";
    } else {
      activeHashbang.value = hashbang;
    }
  }
);

const handleNavScroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollNavsContainer.value!.style.display = "flex";
  } else {
    scrollNavsContainer.value!.style.display = "none";
  }

  props.anchors.forEach((anchor: string) => {
    const el = <HTMLElement>document.querySelector(anchor);
    const screenHeight = window.innerHeight;
    const scrollTrigger = screenHeight * 0.5;

    if (
      el &&
      window.scrollY > el.offsetTop - scrollTrigger &&
      window.scrollY < el.offsetTop + el.offsetHeight - scrollTrigger
    ) {
      activeHashbang.value = anchor;
    }
  });
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
  <div
    ref="scrollNavsContainer"
    class="fixed right-6 top-0 h-full flex flex-col justify-center hidden"
  >
    <button
      v-for="(anchor, i) in props.anchors"
      :key="'anchor-' + i"
      class="mt-1 rounded-full flex justify-center items-center"
      @click="scrollToAnchor(anchor)"
    >
      <i
        class="fas text-red-800"
        :class="activeHashbang === anchor ? 'fa-dot-circle' : 'fa-circle'"
      ></i>
    </button>
  </div>
</template>
