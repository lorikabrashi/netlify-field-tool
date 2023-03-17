import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import OptionsCard from '../../components/Cards/Options.card'
import ChangeAlert from '../../components/ConfirmAlerts/Change.alert'
import CollectionTypeSelector from '../../components/Forms/CollectionTypeSelector'
import { useNotification } from '../../components/Notifications/Notifications'
import { api } from '../../lib/api/v1'
import { closeModal, openModal } from '../../lib/store/slices/modal.slice'
import { CollectionTypes, Descriptions } from '../../shared/constants'
import { IApiError, INetlifyFile, INetlifyField, INetlifyCollectionOptions, ISetCollectionType } from '../../shared/types'

interface Props {}

const Collection: React.FC<Props> = () => {
  const { slug, collection } = useParams()
  const notification = useNotification()
  const dispatch = useDispatch()

  const [collectionType, setCollectionType] = useState<CollectionTypes>()
  const [collectionOptions, setCollectionOptions] = useState<INetlifyCollectionOptions>()
  const [collectionFields, setCollectionFields] = useState<INetlifyField[]>()
  const [collectionFiles, setCollectionFiles] = useState<INetlifyFile[]>()

  const getCollection = async () => {
    if (!slug || !collection) return

    try {
      const response = await api.collections.single(slug, collection)

      const { fields, files, ...options } = response.results

      setCollectionOptions(options)
      setCollectionFields(fields)
      setCollectionFiles(files)

      // Checking type of collection
      if (!response.results.fields && !response.results.files) {
        setCollectionType(CollectionTypes.NONE)
      } else {
        if (response.results.fields) setCollectionType(CollectionTypes.FIELDS)
        else setCollectionType(CollectionTypes.FILES)
      }
    } catch (err: unknown) {
      const errorResponse = (err as AxiosError).response?.data as IApiError
      notification.error(errorResponse.message)
    }
  }

  useEffect(() => {
    getCollection()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const changeTypeHandler = (type: CollectionTypes) => {
    const changeType = async () => {
      if (!slug || !collection) return
      try {
        const data: ISetCollectionType = {
          slug,
          collection,
          type,
        }
        await api.collections.setType(data)
      } catch (err: unknown) {
        const errorResponse = (err as AxiosError).response?.data as IApiError
        notification.error(errorResponse.message)
      }
      getCollection()
      dispatch(closeModal())
    }

    dispatch(
      openModal({
        title: 'Confirm',
        content: (
          <ChangeAlert
            description={Descriptions.CHANGE_COLLECTION_TYPE}
            element={'Collection Type'}
            onConfirm={changeType}
            onCancel={() => dispatch(closeModal())}
          />
        ),
      })
    )
  }

  return (
    <Row className="pt-5">
      <Col sm={6} className="mb-5">
        {collectionOptions && <OptionsCard options={collectionOptions} />}
      </Col>
      <Col sm={6} className="mb-5">
        {collectionType && <CollectionTypeSelector collectionType={collectionType} handleSubmit={changeTypeHandler} />}
      </Col>
      <Col sm={12}>
        {collectionType === CollectionTypes.FIELDS && 'Fields'}
        {collectionType === CollectionTypes.FILES && 'FILES'}
      </Col>
    </Row>
  )
}

export default Collection
