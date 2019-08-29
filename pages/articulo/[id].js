import fetch from 'isomorphic-unfetch'
import React from 'react'
import { Segment, Card, Icon, Image, List } from 'semantic-ui-react'

//Estilos
import 'semantic-ui-css/semantic.min.css'

import Layout from "../../components/layout"

const Articulo = ({ articulo }) =>( 
  <Layout>
    <Segment padded className="centered" className="mb-2">
      <Card>
        <Image src='https://source.unsplash.com/random' wrapped ui={false} />
        <Card.Content>
          <Card.Header>{articulo.name}</Card.Header>
          <Card.Meta>{articulo.username}</Card.Meta>
          <Card.Description>
            <List>
              <List.Item>
                <List.Icon name='mail' />
                <List.Content>
                  <a href={`mailto:${articulo.email}`}>{articulo.email}</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='marker' />
                <List.Content>{`${articulo.address.street}, ${articulo.address.city}`}</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='phone' />
                <List.Content>
                  {articulo.phone}
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='linkify' />
                <List.Content>
                  <a href={`http://www.${articulo.website}`}>{articulo.website}</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='building' />
                <List.Content>
                  {articulo.company.name}
                </List.Content>
              </List.Item>
            </List>
          </Card.Description>
          </Card.Content>
      </Card>
    </Segment>
  </Layout>
)

Articulo.getInitialProps = async ({ query: { id } }, res) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const articulo = await response.json()

  return { articulo }
}

export default Articulo