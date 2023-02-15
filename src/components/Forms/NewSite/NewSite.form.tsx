import { AxiosError } from 'axios'
import { FormEvent, useState } from 'react'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { api } from '../../../lib/api'
import { RootState } from '../../../lib/store'
import { addSite } from '../../../lib/store/slices/sites.slice'
import { IApiError, ISiteData } from '../../../shared/types'

interface Props {
  onComplete: () => void
}

const NewSite: React.FC<Props> = ({ onComplete }) => {
  const [name, setName] = useState('')
  const [slug, setSlug] = useState('')
  const [path, setPath] = useState('')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const dispatch = useDispatch()
  const sites = useSelector((state: RootState) => state.sites.value)
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!name) {
      setErrorMessage('Name cannot be empty!')
      return
    }
    if (!slug) {
      setErrorMessage('Slug cannot be empty!')
      return
    }
    if (!path) {
      setErrorMessage('Path cannot be empty!')
      return
    }

    if (sites.find((elem) => elem.slug === slug)) {
      setErrorMessage('Slug already exits')
      return
    }

    const siteData: ISiteData = {
      name: name,
      slug: slug,
      path: path,
    }

    try {
      await api.site.create(siteData)
      dispatch(addSite(siteData))
      navigate(`/site/${slug}`)
      onComplete()
    } catch (err: unknown) {
      const errorResponse = (err as AxiosError).response?.data as IApiError
      setErrorMessage(errorResponse.message)
    }
  }

  const handleSlugFocus = () => {
    if (name && !slug) {
      setSlug(name.toLowerCase().split(' ').join('-').trim())
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
              <Form.Control required value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="slug">
              <Form.Label>Slug</Form.Label>
              <Form.Control required onFocus={handleSlugFocus} value={slug} onChange={(e) => setSlug(e.target.value.trim().replaceAll(/\s/g, ''))} type="text" placeholder="Slug" />
              <small>Slug needs to be unique</small>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="path">
              <Form.Label>Path</Form.Label>
              <Form.Control required value={path} onChange={(e) => setPath(e.target.value)} type="text" placeholder="Path" />
              <small>Path of config.yml</small>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="float-end" size="lg" variant="primary" type="submit">
              + Add Site
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default NewSite
