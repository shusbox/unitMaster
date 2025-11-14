import { create } from "zustand";

const useAuthStore = create((set) => ({
  modal: false,
  toggleModal: () => set((status) => ({
    modal: !status.modal,
  })),
}));

export default useAuthStore;