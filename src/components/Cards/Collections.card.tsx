import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/api/v1'
import { closeModal, openModal } from '../../lib/store/slices/modal.slice'
import { ApiStatus } from '../../shared/constants'
import { IApiError, INetlifyCmsCollection } from '../../shared/types'
import DeleteAlert from '../ConfirmAlerts/Delete.alert'
import { useNotification } from '../Notifications/Notifications'

interface Props {
  collections: INetlifyCmsCollection[]
  slug: string
  refreshCollections: (slug: string) => void
}

const ListCollection: React.FC<Props> = ({ collections, refreshCollections, slug }) => {
  const dispatch = useDispatch()

  const handleDelete = async (name: string) => {
    try {
      const response = await api.collections.delete({ name, slug })
      if (response.confirmation === ApiStatus.success) {
        refreshCollections(slug)
      }
      dispatch(closeModal())
    } catch (err: unknown) {
      const errorResponse = (err as AxiosError).response?.data as IApiError
      console.error(errorResponse)
    }
  }

  const handleConfirm = (name: string, label: string = name) => {
    dispatch(
      openModal({
        title: 'Confirm',
        content: <DeleteAlert element={label} onConfirm={() => handleDelete(name)} onCancel={() => dispatch(closeModal())} />,
      })
    )
  }

  return (
    <ListGroup variant="flush">
      {collections &&
        collections.map((collection, index) => (
          <ListGroup.Item key={index} variant="dark">
            <div className="collection-list">
              <div className="collection-info">
                <div className="collection-label">
                  <b>Label:</b>
                  <span>{collection.label || 'N/A'}</span>
                </div>
                <div className="collection-name">
                  <b>Name:</b>
                  <span>{collection.name}</span>
                </div>
              </div>
              <div className="actions">
                <Card.Link href="#">
                  <b>Edit</b>
                </Card.Link>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => {
                    handleConfirm(collection.name, collection.label)
                  }}
                >
                  <b>Delete</b>
                </Button>
              </div>
            </div>
          </ListGroup.Item>
        ))}
    </ListGroup>
  )
}

const CollectionsCard: React.FC = () => {
  const [collections, setCollections] = useState<INetlifyCmsCollection[]>([])
  const { slug } = useParams()
  const notification = useNotification()

  const getCollections = async (slug: string) => {
    try {
      const response = await api.collections.get(slug)
      setCollections(response.results)
    } catch (err: unknown) {
      const errorResponse = (err as AxiosError).response?.data as IApiError
      console.error(errorResponse)
    }
  }

  useEffect(() => {
    if (slug) {
      getCollections(slug)
    }
  }, [slug])

  return (
    <Card bg="dark">
      <Card.Body>
        <Card.Header>
          <h3>Collections</h3>
        </Card.Header>
        {slug && <ListCollection collections={collections} refreshCollections={getCollections} slug={slug} />}
        <Card.Footer className="d-flex justify-content-end">
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              setTimeout(() => {
                notification.info('info')
              }, 1000)

              setTimeout(() => {
                notification.dark('dark')
              }, 2000)

              setTimeout(() => {
                notification.dark('error')
              }, 3000)

              setTimeout(() => {
                notification.light('light')
              }, 4000)

              setTimeout(() => {
                notification.primary('primary')
              }, 5000)

              setTimeout(() => {
                notification.secondary('secondary')
              }, 6000)

              setTimeout(() => {
                notification.success('success')
              }, 7000)

              setTimeout(() => {
                notification.warning('warning')
              }, 8000)
            }}
          >
            Add Collection
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  )
}

export default CollectionsCard
