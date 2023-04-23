import { create } from "zustand";

const useStore = create((set) => ({
  searchQuery: "",
  setSearchQuery: (searchQuery: string) =>
    set((state: any) => ({ searchQuery: (state.searchQuery = searchQuery) })),
}));

export default useStore;
