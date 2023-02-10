import { Button, Col, Container, Row } from 'react-bootstrap'

interface Props {
  element: string
  onConfirm: () => void
  onCancel: () => void
}

const DeleteAlert: React.FC<Props> = ({ element, onConfirm, onCancel }) => {
  return (
    <Container>
      <Row>
        <Col>
          <p>Are you sure you want to delete {element}?</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="float-end">
            <Button variant="primary" onClick={onCancel} className="m-3">
              Cancel
            </Button>
            <Button variant="danger" onClick={onConfirm}>Confirm</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default DeleteAlert
