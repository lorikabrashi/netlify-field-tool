import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { openModal } from '../../../lib/store/slices/modal.slice'
import NewSiteForm from '../../Forms/NewSite'
interface Props {}

const NewSiteButton: React.FC<Props> = () => {
  const dispatch = useDispatch()
  const handleNewSiteClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    dispatch(
      openModal({
        title: 'New Site',
        content: <NewSiteForm />,
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
