import { Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../lib/store'
import { closeModal } from '../../lib/store/slices/modal.slice'

interface Props {}

const GlobalModal: React.FC<Props> = () => {
  const modalValues = useSelector((state: RootState) => state.modal.value)
  const dispatch = useDispatch()

  const handleCloseModal = () => {
    dispatch(closeModal())
  }
  
  return (
    <Modal show={modalValues.state} onHide={handleCloseModal}>
      <Modal.Header closeButton closeVariant="white">
        <Modal.Title>{modalValues.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalValues.content}</Modal.Body>
    </Modal>
  )
}

export default GlobalModal
