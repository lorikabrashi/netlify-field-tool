import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNotification } from '../../components/Notifications/Notifications'
import { api } from '../../lib/api/v1'
import { IApiError, INetlifyCmsCollection } from '../../shared/types'

interface Props {}

const Collection: React.FC<Props> = () => {
  const [collectionData, setCollectionData] = useState<INetlifyCmsCollection>()
  const { slug, collection } = useParams()
  const notification = useNotification()

  const getCollection = async (slug: string, collection: string) => {
    try {
      const response = await api.collections.single(slug, collection)
      setCollectionData(response.results)

    } catch (err: unknown) {
      const errorResponse = (err as AxiosError).response?.data as IApiError
      notification.error(errorResponse.message)
    }
  }

  useEffect(() => {
    if (slug && collection) {
      getCollection(slug, collection)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div>{collectionData && <pre>{JSON.stringify(collectionData, null, 2)}</pre>}</div>
}

export default Collection
