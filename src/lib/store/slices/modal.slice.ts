import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import React from 'react'
import { IModal } from '../../../shared/types'

const initialState: { value: IModal } = {
  value: {
    state: false,
    title: '',
    content: React.createElement(React.Fragment),
    size: ''
  },
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<Omit<IModal, 'state'>>) => {
      state.value = { ...action.payload, state: true }
    },
    closeModal: (state) => {
      state.value = initialState.value
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
