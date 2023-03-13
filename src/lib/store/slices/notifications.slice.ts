import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'
import { ReactElement } from 'react'

export type NotificationId = number

interface IAlert {
  notificationId: NotificationId
  alert: ReactElement
}

const initialState: { value: IAlert[] } = {
  value: [],
}

export const siteSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<IAlert>) => {
      state.value.push(action.payload)
    },
    removeNotification: (state, action: PayloadAction<NotificationId>) => {
      const items = [...current(state).value]
      const index = items.findIndex((elem) => elem.notificationId === action.payload)
      items.splice(index, 1)
      state.value = items
    },
  },
})

export const { addNotification, removeNotification } = siteSlice.actions
export default siteSlice.reducer