import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => {
      return {
        user: null,
        accessToken: null,
        isAuthenticated: undefined,
        setUser: (user) => set({ user }),
        accessLogin: (accessToken, user) => {
          set({
            user: user,
            accessToken: accessToken,
            isAuthenticated: true,
          });
        },

        accessLogout: () => {
          set({
            user: null,
            accessToken: null,
            isAuthenticated: false,
          });
        },

        checkAuth: () => {
          const token = useUserStore.getState().accessToken;
          token
            ? set({ isAuthenticated: true })
            : set({ isAuthenticated: false });
        },
      };
    },
    {
      name: "user-store",
      partialize: (state) => ({
        user: state.user,
        accessToken: state.accessToken,
      }),
    }
  )
);

export default useUserStore;
