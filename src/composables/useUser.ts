import { computed, readonly, ref } from "vue";
import axios from "axios";
import type { User } from "@/types/User";

const user = ref<User>();

export const useUser = () => {
  const hasUser = computed(() => user.value !== undefined);

  const setUser = (userData: User) => {
    user.value = userData;
  };

  const fetchUserByInvite = (inviteCode: string) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`/api/invites/${inviteCode}`)
        .then((result) => {
          setUser(result.data.user);
          localStorage.setItem("invite_code", result.data.user.invite_code);
          resolve(result.data.user);
        })
        .catch((err) => {
          localStorage.removeItem("invite_code");
          reject(err);
        });
    });
  };

  return {
    user: readonly(user),
    has_user: readonly(hasUser),

    setUser,
    fetchUserByInvite,
  };
};
