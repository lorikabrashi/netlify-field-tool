import { useEffect, useRef, useState } from 'react'
import { Alert as BootstrapAlert } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { NotificationId, removeNotification } from '../../lib/store/slices/notifications.slice'
import { AlertTypes } from '../../shared/constants'

interface Props {
  type: AlertTypes
  message: string
  notificationId: NotificationId
}

const Alert: React.FC<Props> = ({ type, message, notificationId }) => {
  const dispatch = useDispatch()
  const [timer, setTimer] = useState<NodeJS.Timeout>()

  useEffect(() => {
    const timerID = setTimeout(() => {
      dispatch(removeNotification(notificationId))
    }, 5000)

    setTimer(timerID)
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BootstrapAlert
      dismissible
      variant={type}
      onClose={() => {
        dispatch(removeNotification(notificationId))
        clearTimeout(timer)
      }}
    >
      {message}
    </BootstrapAlert>
  )
}

export default Alert
