import React, { useEffect, useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/api/v1'
import { INetlifyOptions } from '../../shared/types'

interface Props {
  data: any
}

const ListMap: React.FC<Props> = ({ data }) => {
  return (
    <ListGroup variant="flush">
      {data &&
        Object.keys(data).map((elem, index) => (
          <ListGroup.Item key={index} variant="dark">
            <b>{elem}</b>: {typeof data[elem] !== 'object' ? <span>{JSON.stringify(data[elem])}</span> : <ListMap data={data[elem]} />}
          </ListGroup.Item>
        ))}
    </ListGroup>
  )
}

const Options: React.FC = () => {
  const { slug } = useParams()
  const [options, setOptions] = useState<INetlifyOptions>()

  useEffect(() => {
    const getSiteOptions = async () => {
      if (slug) {
        const response = await api.site.getOptions(slug)
        setOptions(response.results)
      }
    }

    getSiteOptions()
  }, [slug])

  return (
    <Card bg="dark">
      <Card.Body>
        <Card.Header><h3>Options</h3></Card.Header>
        <ListMap data={options} />
        <Card.Footer>
          <Card.Link href="#"><b>Edit</b></Card.Link>
        </Card.Footer>
      </Card.Body>
    </Card>
  )
}

export default Options
