import { Col, Row } from 'react-bootstrap'
import NewSiteButton from '../../components/Buttons/NewSite'
import SitesTable from '../../components/Tables/Sites.table'

interface Props {}

const Root: React.FC<Props> = () => {
  return (
    <Row className="pt-5">
      <Col className="d-flex justify-content-end mb-5" sm={{ offset: 9, span: 3 }}>
        <NewSiteButton />
      </Col>
      <Col sm={12}>
        <SitesTable />
      </Col>
    </Row>
  )
}

export default Root
