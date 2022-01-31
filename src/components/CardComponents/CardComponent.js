import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const CardComponent = (props) => (
  <div >
      <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        {props.description}
      </Card.Description>
    </Card.Content>

  </Card>
  </div>
)

export default CardComponent;