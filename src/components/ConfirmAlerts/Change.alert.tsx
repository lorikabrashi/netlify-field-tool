import { Button, Col, Container, Row } from 'react-bootstrap'
import { AlertTypes } from '../../shared/constants'

interface Props {
  element: string
  description?: string
  onConfirm: () => void
  onCancel: () => void
}

const ChangeAlert: React.FC<Props> = ({ element, description, onConfirm, onCancel }) => {
  return (
    <Container>
      <Row>
        <Col>
          {description}
          <p>Are you sure you want to change {element}?</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="float-end">
            <Button variant={AlertTypes.PRIMARY} onClick={onCancel} className="m-3">
              No
            </Button>
            <Button variant={AlertTypes.PRIMARY} onClick={onConfirm}>
              Yes
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ChangeAlert
