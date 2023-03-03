import { Col, Row } from 'react-bootstrap'
import OptionsCard from '../../components/Cards/Options.card'
import CollectionsCard from '../../components/Cards/Collections.card'

const SingleSite: React.FC = () => {
  return (
    <Row className="pt-5">
      <Col sm={6} className="mb-5">
        <OptionsCard />
      </Col>
      <Col sm={12}>
        <CollectionsCard />
      </Col>
    </Row>
  )
}

export default SingleSite
