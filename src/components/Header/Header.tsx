import { Row, Col, Image } from 'react-bootstrap'
import Logo from '../../assets/Logo.svg'

interface Props {}
const Header: React.FC<Props> = () => {
  return (
    <Row className="mt-4 mb-4">
      <Col sm={{ span: 3 }}>
        <Image alt="logo" width={250} height={100} src={Logo} />
      </Col>
    </Row>
  )
}

export default Header
