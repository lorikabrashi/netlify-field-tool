import { Col, Row } from 'react-bootstrap'
import OptionsCard from '../../components/Cards/Options.card'
import CollectionsCard from '../../components/Cards/Collections.card'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { INetlifyOptions } from '../../shared/types'
import { api } from '../../lib/api/v1'

const SingleSite: React.FC = () => {
  const { slug } = useParams()
  const [options, setOptions] = useState<INetlifyOptions>()

  useEffect(() => {
    const getSiteOptions = async () => {
      if (slug) {
        try {
          const response = await api.site.getOptions(slug)
          setOptions(response.results)
        } catch (err) {}
      }
    }
    getSiteOptions()
  }, [slug])

  return (
    <Row className="pt-5">
      <Col sm={6} className="mb-5">
        {options && <OptionsCard options={options} />}
      </Col>
      <Col sm={12}>
        <CollectionsCard />
      </Col>
    </Row>
  )
}

export default SingleSite
