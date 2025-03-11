import { create } from "zustand";

interface Item {
  name: string;
  quantity: string;
}

interface OrderState {
  title: string;
  description: string;
  additionalItems: Item[];
  materials: Item[];
  observations: string;
  setOrderData: (data: Partial<OrderState>) => void;
  addAdditionalItem: (item: Item) => void;
  addMaterial: (item: Item) => void;
}

export const useOrderStore = create<OrderState>((set) => ({
  title: "",
  description: "",
  additionalItems: [],
  materials: [],
  observations: "",
  setOrderData: (data) => set((state) => ({ ...state, ...data })),
  addAdditionalItem: (item) =>
    set((state) => ({ additionalItems: [...state.additionalItems, item] })),
  addMaterial: (item) =>
    set((state) => ({ materials: [...state.materials, item] })),
}));
