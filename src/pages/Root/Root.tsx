import { Col, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'

function BasicExample() {
  return (
    <Table variant="dark" striped bordered hover>
      <thead>
        <tr>
          <th style={{ width: '10%' }}>#</th>
          <th>Site Name</th>
          <th style={{ width: '15%' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  )
}

interface Props {}

const Root: React.FC<Props> = () => {
  return (
    <Row className="pt-5">
      <Col>
        <BasicExample />
      </Col>
    </Row>
  )
}

export default Root
