import { ListGroup } from "react-bootstrap"

interface Props {
  data: any
}

const OptionsList: React.FC<Props> = ({ data }) => {
  return (
    <ListGroup variant="flush">
      {data &&
        Object.keys(data).map((elem, index) => (
          <ListGroup.Item key={index} variant="dark">
            <b>{elem}</b>: {typeof data[elem] !== 'object' ? <span>{JSON.stringify(data[elem])}</span> : <OptionsList data={data[elem]} />}
          </ListGroup.Item>
        ))}
    </ListGroup>
  )
}

export default OptionsList