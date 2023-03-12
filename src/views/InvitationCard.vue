<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const nameContainer = ref<HTMLElement>();
const imageContainer = ref<HTMLImageElement>();
const user = ref<{
  name: string;
  invite_code: string;
}>({
  name: "",
  invite_code: "",
});

onMounted(() => {
  getInvite();

  window.addEventListener("resize", handleResize);

  imageContainer.value!.onload = handleResize;
});

const getInvite = () => {
  const inviteCode = route.params.code;

  if (inviteCode) {
    axios.get(`/api/invites/${inviteCode}`).then((result) => {
      user.value = result.data.user;
    });
  }
};

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
        <p>
          <u>{{
            user.name ||
            "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
          }}</u>
        </p>
      </div>
    </div>
  </div>
</template>
