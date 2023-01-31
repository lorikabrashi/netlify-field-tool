import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { persistReducer } from 'reduxjs-toolkit-persist'
import storage from 'reduxjs-toolkit-persist/lib/storage'

const persistConfig = {
  key: 'netlify-fields-tool-paths',
  storage,
}

const initialState: { value: any } = {
  value: {},
}

export const pathSlice = createSlice({
  name: 'path',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<any>) => {
      state.value = { ...action.payload }
    },
  },
})

// Action creators are generated for each case reducer function
export const { add } = pathSlice.actions

export default persistReducer(persistConfig, pathSlice.reducer)
