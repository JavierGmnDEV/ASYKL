import { create } from 'zustand';

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  login: (user) => set({ isAuthenticated: true, user }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));

export default useAuthStore;

export const useSearchStore = create((set) => ({
  lastSearches: [],
  searchResults: [],
  products: [],
  setSearchResults: (results) => set({ searchResults: results }),
  setProducts: (products) => set({ products }),
  addSearch: (search) => set((state) => {
    const updatedSearches = [...state.lastSearches, search];
    return { lastSearches: updatedSearches };
  }),
}));

export const useModalStore = create((set) => ({
  isContactModalOpen: false,
  openContactModal: () => set({ isContactModalOpen: true }),
  closeContactModal: () => set({ isContactModalOpen: false }),
}));