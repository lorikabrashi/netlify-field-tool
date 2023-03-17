import React from 'react'
import { Card } from 'react-bootstrap'
import { INetlifyCollectionOptions, INetlifyOptions } from '../../shared/types'
import OptionsList from '../Lists/Options.List'

// type UnionKeys<T> = T extends T ? keyof T : never;
// type StrictUnionHelper<T, TAll> =
//     T extends any
//     ? T & Partial<Record<Exclude<UnionKeys<TAll>, keyof T>, never>> : never;

// type StrictUnion<T> = StrictUnionHelper<T, T>

// interface Props {
//   options: StrictUnion<INetlifyCollectionOptions | INetlifyOptions>
// }

interface Props {
  options: INetlifyCollectionOptions | INetlifyOptions
}

const Options: React.FC<Props> = ({ options }) => {
  return (
    <Card bg="dark">
      <Card.Body>
        <Card.Header>
          <h3>Options</h3>
        </Card.Header>
        <OptionsList data={options} />
        <Card.Footer>
          <Card.Link href="#">
            <b>Edit</b>
          </Card.Link>
        </Card.Footer>
      </Card.Body>
    </Card>
  )
}

export default Options
