import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'

import storage from 'redux-persist/lib/storage'

import { ISiteData } from '../../../shared/types'

const persistConfig = {
  key: 'netlify-fields-tool-sites',
  storage,
}

const initialState: { value: ISiteData[] } = {
  value: [],
}

export const siteSlice = createSlice({
  name: 'site',
  initialState,
  reducers: {
    addSite: (state, action: PayloadAction<ISiteData>) => {
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

export const { addSite, removeSite } = siteSlice.actions
export default persistReducer(persistConfig, siteSlice.reducer)


