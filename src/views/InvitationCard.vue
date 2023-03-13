<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useUser } from "@/composables/useUser";

const { user, has_user, fetchUserByInvite } = useUser();
const route = useRoute();
const nameContainer = ref<HTMLElement>();
const imageContainer = ref<HTMLImageElement>();

onMounted(() => {
  window.addEventListener("resize", handleResize);

  imageContainer.value!.onload = handleResize;

  const invite_code = localStorage.getItem("invite_code");

  if (route.params.code) {
    fetchUserByInvite(<string>route.params.code);
  } else if (invite_code) {
    fetchUserByInvite(invite_code);
  }
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

      <div class="absolute name-container text-gray-900" ref="nameContainer">
        <p v-if="has_user">
          <u>{{
            user
              ? user.name
              : "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
          }}</u>
        </p>
      </div>
    </div>
  </div>

  <div class="flex justify-center">
    For more details, visit: <a href="https://wagassalva.com">wagassalva.com</a>
  </div>
</template>
