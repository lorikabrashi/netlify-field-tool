import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import modalSlice from './slices/modal.slice'
import notificationsSlice from './slices/notifications.slice'
import sitesSlice from './slices/sites.slice'

export const store = configureStore({
  reducer: {
    sites: sitesSlice,
    modal: modalSlice,
    notifications: notificationsSlice
  },
  middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
