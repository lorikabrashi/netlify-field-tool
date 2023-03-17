import { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { CollectionTypes } from '../../shared/constants'

interface Props {
  handleSubmit: (type: CollectionTypes) => void
  collectionType: CollectionTypes
}

const CollectionTypeSelector: React.FC<Props> = ({ collectionType, handleSubmit }) => {
  const [type, setType] = useState<CollectionTypes>(collectionType)

  const handleButtonClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSubmit(type)
  }

  return (
    <Card bg="dark">
      <Card.Body>
        <Form onSubmit={handleButtonClick}>
          <Card.Header>
            <h2>Set Collection Type</h2>
          </Card.Header>
          <div className="mb-3">
            <Form.Check>
              <Form.Check.Input
                checked={type === CollectionTypes.FIELDS}
                name="collectionType"
                id={CollectionTypes.FIELDS}
                value={CollectionTypes.FIELDS}
                type={'radio'}
                onChange={() => {
                  setType(CollectionTypes.FIELDS)
                }}
              />
              <Form.Check.Label htmlFor={CollectionTypes.FIELDS}>{CollectionTypes.FIELDS}</Form.Check.Label>
            </Form.Check>
            <Form.Check>
              <Form.Check.Input
                checked={type === CollectionTypes.FILES}
                id={CollectionTypes.FILES}
                name="collectionType"
                value={CollectionTypes.FILES}
                type={'radio'}
                onChange={() => {
                  setType(CollectionTypes.FILES)
                }}
              />
              <Form.Check.Label htmlFor={CollectionTypes.FILES}>{CollectionTypes.FILES}</Form.Check.Label>
            </Form.Check>
          </div>
          <Card.Footer>
            <Button disabled={type === CollectionTypes.NONE} type="submit">
              Set Collection Type
            </Button>
          </Card.Footer>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default CollectionTypeSelector
