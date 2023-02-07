import { Row, Col, Image } from 'react-bootstrap'
import Logo from '../../assets/Logo.svg'
import NewSiteButton from '../Buttons/NewSite'

interface Props {}
const Header: React.FC<Props> = () => {
  return (
    <Row className="mt-4 mb-4">
      <Col sm={{ span: 3 }}>
        <Image alt="logo" width={250} height={100} src={Logo} />
      </Col>
      <Col className="d-flex flex-column justify-content-end" sm={{ offset: 7, span: 2 }}>
        <NewSiteButton />
      </Col>
    </Row>
  )
}

export default Header
