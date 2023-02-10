import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { closeModal, openModal } from '../../../lib/store/slices/modal.slice'
import NewSiteForm from '../../Forms/NewSite'

const NewSiteButton: React.FC = () => {
  const dispatch = useDispatch()
  const handleNewSiteClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    dispatch(
      openModal({
        title: 'New Site',
        content: (
          <NewSiteForm
            onComplete={() => {
              dispatch(closeModal())
            }}
          />
        ),
        size: 'modal-xl',
      })
    )
  }

  return (
    <Button variant={'primary'} onClick={handleNewSiteClick}>
      <span>+ New Site</span>
    </Button>
  )
}

export default NewSiteButton
