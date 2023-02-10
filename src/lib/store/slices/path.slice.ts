import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'

import storage from 'redux-persist/lib/storage'

import { IPath } from '../../../shared/types'

const persistConfig = {
  key: 'netlify-fields-tool-paths',
  storage,
}

const initialState: { value: IPath[] } = {
  value: [],
}

export const pathSlice = createSlice({
  name: 'path',
  initialState,
  reducers: {
    addSite: (state, action: PayloadAction<IPath>) => {
      state.value = [...state.value, action.payload]
    },
    removeSite: (state, action: PayloadAction<string>) => {
      const items = [...current(state).value]
      const index = items.findIndex((elem) => elem.slug === action.payload)
      items.splice(index, 1)
      state.value = items
    },
  },
})

export const { addSite, removeSite } = pathSlice.actions
export default persistReducer(persistConfig, pathSlice.reducer)
