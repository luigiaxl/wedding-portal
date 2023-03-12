<script lang="ts" setup>
import { onMounted, ref } from "vue";

const nameContainer = ref<HTMLElement>();
const imageContainer = ref<HTMLImageElement>();

onMounted(() => {
  window.addEventListener("resize", handleResize);

  imageContainer.value!.onload = handleResize;
});

const handleResize = () => {
  const imgHeight = imageContainer.value?.height;
  const imgWidth = imageContainer.value?.width;

  if (imgHeight && imgHeight > 0) {
    nameContainer.value!.setAttribute(
      "style",
      `
      top: ${imgHeight * 0.09}px;
      font-size: ${imgWidth! * 0.035}px;
    `
    );
  }
};
</script>

<template>
  <div class="overflow-auto">
    <div class="m-auto flex justify-center relative">
      <img
        class="image-container"
        ref="imageContainer"
        src="/images/invitation/invitation.png"
        alt=""
        width="790"
      />

      <div class="absolute name-container" ref="nameContainer">
        <p><u>Miakela Ina Rhina Pausal</u></p>
      </div>
    </div>
  </div>
</template>
