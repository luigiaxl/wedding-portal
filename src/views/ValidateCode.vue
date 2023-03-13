<script lang="ts" setup>
import { onMounted } from "vue";
import { useUser } from "@/composables/useUser";
import { useRoute, useRouter } from "vue-router";

const { fetchUserByInvite } = useUser();
const route = useRoute();
const router = useRouter();

onMounted(() => {
  fetchUserByInvite(<string>route.params.code).finally(() =>
    router.push({ name: "home" })
  );
});
</script>
