// src/redux/features/bookmarks/bookmarksSlice.ts
import { BlogItem } from '@/app/api/blogs/route'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const STORAGE_KEY = 'bookmarks'

// initialize from localStorage (or empty array)
const initialState = {
  items:
    typeof window === 'undefined'
      ? []
      : JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
} as { items: BlogItem[] }

const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    addBookmark(state, { payload }: PayloadAction<BlogItem>) {
      if (!state.items.find(i => i.id === payload.id)) {
        state.items.push(payload)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
      }
    },
    removeBookmark(state, { payload: id }: PayloadAction<number>) {
      state.items = state.items.filter(i => i.id !== id)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
    },
    clearBookmarks(state) {
      state.items = []
      localStorage.removeItem(STORAGE_KEY)
    },
  },
})

export const { addBookmark, removeBookmark, clearBookmarks } = bookmarksSlice.actions
export default bookmarksSlice.reducer
