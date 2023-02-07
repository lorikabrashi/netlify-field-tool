import { FormEvent } from 'react';
import { Button, Form } from 'react-bootstrap'

interface Props {}

const NewSite: React.FC<Props> = () => {
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('here')   
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="controlWebsiteName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="WebsiteSlug">
        <Form.Label>Slug</Form.Label>
        <Form.Control type="text" placeholder="Slug" />
        <small>Slug needs to be unique</small>
      </Form.Group>

      <Form.Group className="mb-3" controlId="WebsiteSlug">
        <Form.Label>Path</Form.Label>
        <Form.Control type="text" placeholder="Path" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}


export default NewSite
