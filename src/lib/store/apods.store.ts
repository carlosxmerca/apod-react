import { create } from "zustand";
import { Apod } from "../models/apod.model";

interface ApodState {
  apods: Apod[];
  total: number;
  addApod: (apods: Apod[]) => void;
  setApods: (apods: Apod[]) => void;
  reset: () => void;
}

export const useApodStore = create<ApodState>()((set) => ({
  apods: [],
  total: 0,
  addApod: (apods: Apod[]) =>
    set((state) => ({
      apods: [...apods, ...state.apods],
      total: state.total + apods.length,
    })),
  setApods: (apods: Apod[]) =>
    set(() => ({
      apods,
      total: apods.length,
    })),
  reset: () =>
    set(() => ({
      apods: [],
      total: 0,
    })),
}));
