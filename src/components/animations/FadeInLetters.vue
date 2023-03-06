<template>
  <span ref="fadeInContainer">
    <slot></slot>
  </span>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const fadeInContainer = ref<HTMLSpanElement>();

onMounted(() => {
  if (!fadeInContainer.value) return;

  const fadeInContainerInnerText = fadeInContainer.value.innerText;

  fadeInContainer.value.innerHTML = "";

  Object.values(fadeInContainerInnerText).forEach((letter: string) => {
    fadeInContainer.value!.innerHTML += `<span class="fade-in-letters">${letter}</span>`;
  });

  const paraGraphSpans = <Array<HTMLSpanElement>>(
    fadeInContainer.value.querySelectorAll("span")
  );
  const wordLength = paraGraphSpans.length;

  paraGraphSpans.forEach((span: HTMLSpanElement) => {
    span.style.animationDelay =
      0.1 * Math.floor(Math.random() * wordLength) + "s";
  });
});
</script>
