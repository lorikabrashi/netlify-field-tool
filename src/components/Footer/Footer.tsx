import { Col, Row } from 'react-bootstrap'

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <Row className="mt-auto">
      <Col sm={{ offset: 9, span: 3 }}>
        <p className="text-end">
          <b>Netlify Fields Tool</b> by{' '}
          <a target={'_blank'} rel="noreferrer" href="https://github.com/lorikabrashi">
            Lorik Abrashi
          </a>
        </p>
      </Col>
    </Row>
  )
}

export default Footer
