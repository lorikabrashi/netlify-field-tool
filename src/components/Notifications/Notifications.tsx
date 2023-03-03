import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../lib/store'
import { addNotification } from '../../lib/store/slices/notifications.slice'
import { AlertTypes } from '../../shared/constants'
import Alert from './Alert'

const Notifications: React.FC = () => {
  const notificationsList = useSelector((state: RootState) => state.notifications.value)

  return notificationsList.length > 0 ? (
    <div className="notification-wrapper">
      {notificationsList.map((elem, index) => (
        <React.Fragment key={index}>{elem.alert}</React.Fragment>
      ))}
    </div>
  ) : null
}

export function useNotification() {
  const dispatch = useDispatch()

  const setNotification = (message: string, type: AlertTypes) => {
    const notificationId = new Date().valueOf() + Math.random()
    dispatch(
      addNotification({
        alert: <Alert message={message} type={type} notificationId={notificationId} />,
        notificationId: notificationId,
      })
    )
  }
  return {
    error: (message: string) => {
      setNotification(message, AlertTypes.ERROR)
    },
    info: (message: string) => {
      setNotification(message, AlertTypes.INFO)
    },
    primary: (message: string) => {
      setNotification(message, AlertTypes.PRIMARY)
    },
    secondary: (message: string) => {
      setNotification(message, AlertTypes.SECONDARY)
    },
    success: (message: string) => {
      setNotification(message, AlertTypes.SUCCESS)
    },
    warning: (message: string) => {
      setNotification(message, AlertTypes.WARNING)
    },
    light: (message: string) => {
      setNotification(message, AlertTypes.LIGHT)
    },
    dark: (message: string) => {
      setNotification(message, AlertTypes.DARK)
    },
  }
}

export default Notifications
