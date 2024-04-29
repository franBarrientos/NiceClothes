import { Product } from "@/lib/definitions";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CarritoState = {
  products: Product[];
  addProduct: (producto: Product) => void;
  removeProduct: (id: number) => void;
};

const useCartStore = create<CarritoState>()(
  persist(
    (set) => ({
      products: [],
      addProduct: (p) => set((state) => ({ products: [...state.products, p] })),
      removeProduct: (id) =>
        set((state) => ({
          products: state.products.filter((p) => p.id !== id),
        })),
    }),
    {
      name: "cartStore",
    },
  ),
);

export default useCartStore;
