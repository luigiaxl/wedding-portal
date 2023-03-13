<script lang="ts" setup>
import { ref } from "vue";
import { useUser } from "@/composables/useUser";
import { useRouter } from "vue-router";

const { fetchUserByInvite } = useUser();
const inviteCode = ref<string>();
const router = useRouter();

interface Props {
  message: string;
}
withDefaults(defineProps<Props>(), {
  message: "To view, please enter your invite code:",
});

const submitInviteCode = () => {
  fetchUserByInvite(inviteCode.value || "").finally(() => {
    router.push({ name: "validatecode", params: { code: inviteCode.value } });
  });
};
</script>

<template>
  <div class="flex flex-col justify-center my-6 items-center">
    <p class="text-center">{{ message }}</p>
    <div class="mt-2">
      <form @submit.prevent="submitInviteCode">
        <input
          type="text"
          v-model="inviteCode"
          class="px-2 py-1 rounded text-center border"
          placeholder="Enter Invite Code"
        />
      </form>
    </div>

    <p class="mt-2 text-gray-400 text-center">
      https://wagassalva.com/invitation/&lt;your invite code&gt;
    </p>
  </div>
</template>
