import { AxiosError } from 'axios'
import { FormEvent, useState } from 'react'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { api } from '../../lib/api/v1'
import { IApiError, ICreateCollectionData } from '../../shared/types'

interface Props {
  onComplete: () => void
  slug: string
}

const NewCollection: React.FC<Props> = ({ onComplete, slug }) => {
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [label, setLabel] = useState<string>('')

  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name) {
      setErrorMessage('Name cannot be empty')
      return
    }
    if (!label) {
      setErrorMessage('Label cannot be empty')
      return
    }

    try {
      const collectionData: ICreateCollectionData = {
        name: name,
        label: label,
        slug: slug,
      }
      await api.collections.create(collectionData)
      navigate(`/site/${slug}/collection/${name}`)
      onComplete()
    } catch (err: unknown) {
      const errorResponse = (err as AxiosError).response?.data as IApiError
      setErrorMessage(errorResponse.message)
    }
  }

  return (
    <Container className="p-5">
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control required value={name} onChange={(e) => setName(e.target.value.trim().replaceAll(/\s/g, ''))} type="text" placeholder="Name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="slug">
              <Form.Label>Label</Form.Label>
              <Form.Control required value={label} onChange={(e) => setLabel(e.target.value)} type="text" placeholder="Label" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="float-end" size="sm" variant="primary" type="submit">
              Add Collection
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default NewCollection
