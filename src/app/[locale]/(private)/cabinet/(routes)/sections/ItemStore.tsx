// itemsStore.js
import { StaticImageData } from 'next/image';
import { create } from 'zustand';

interface Item {
  index: number;
  title: string;
  icon: StaticImageData;
  value: number;
  subcategory: string;
  date: string;
  offers: number;
}

interface ItemsStore {
  items: Item[];
  dir: boolean;
  setItems: (items: Item[] | ((prevItems: Item[]) => Item[])) => void;
  addItem: (item: Item) => void;
  editItem: (index: number, updatedItem: Item) => void;
  sortItems: (prop: keyof Item) => void;
  filterItems: (filter: string) => void;
  deleteItem: (index: number) => void;
}

export const useItemsStore = create<ItemsStore>((set) => ({
  items: [],
  dir: false,
  setItems: (newItems) => {
    set((state) => ({
      items: typeof newItems === 'function' ? newItems(state.items) : newItems,
    }));
  },
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  editItem: (index, updatedItem) =>
    set((state) => ({
      items: state.items.map((item, i) => (i === index ? updatedItem : item)),
    })),
  sortItems: (prop) =>
    set((state) => ({
      items: [...state.items].sort((a, b) => {
        if (!state.dir) {
          return a[prop] < b[prop] ? -1 : 1;
        } else {
          return a[prop] > b[prop] ? -1 : 1;
        }
      }),
      dir: !state.dir,
    })),
  filterItems: (filter) =>
    set((state) => ({
      items: state.items.filter((item) => item.subcategory.includes(filter)),
    })),
  deleteItem: (index) =>
    set((state) => ({
      items: state.items.filter((i) => i.index !== index),
    })),
}));
