import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BookmarksState {
  bookmarks: Set<string>;
  setBookmark: (id: string) => void;
  resetBookmarks: () => void;
}

export const useBookmarksStore = create<BookmarksState>()(
  persist(
    (set) => ({
      bookmarks: new Set<string>(),
      setBookmark: (id: string) =>
        set((state) => {
          const newSaved = new Set(state.bookmarks);
          if (newSaved.has(id)) newSaved.delete(id);
          else newSaved.add(id);
          return { bookmarks: newSaved };
        }),
      resetBookmarks: () =>
        set(() => ({
          bookmarks: new Set<string>(),
        })),
    }),
    {
      name: "bookmarks-store",
      partialize: (state: BookmarksState) => ({
        bookmarks: Array.from(state.bookmarks),
      }),
      merge: (persistedState: any, currentState: BookmarksState) => ({
        ...currentState,
        bookmarks: new Set(persistedState.bookmarks),
      }),
    }
  )
);
