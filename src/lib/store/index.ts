import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import pathSlice from './slices/path.slice'

export const store = configureStore({
  reducer: {
    path: pathSlice,
  },
  middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
