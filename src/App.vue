<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import { onMounted } from "vue";
import { useUser } from "@/composables/useUser";

const { fetchUserByInvite } = useUser();
const route = useRoute();

onMounted(() => {
  const invite_code = localStorage.getItem("invite_code");

  if (route.params.code) {
    fetchUserByInvite(<string>route.params.code);
  } else if (invite_code) {
    fetchUserByInvite(invite_code);
  }
});
</script>

<template>
  <RouterView />
</template>
