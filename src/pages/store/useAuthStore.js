import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  accessToken: null,
  genarateTimestamp: null,
  setAccessToken: (token) => set({ accessToken: token }),
  setGenarateTimestamp: (timestamp) => set({ genarateTimestamp: timestamp }),
  setUser: (user) => set({ user }),
  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));

export default useAuthStore;