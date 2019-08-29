import React, { Component } from 'react'
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react'

const Footer = () => (
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Acerca de' />
              <List link inverted>
                <List.Item as='a'>Política</List.Item>
                <List.Item as='a'>Economía</List.Item>
                <List.Item as='a'>Deportes</List.Item>
                <List.Item as='a'>Espectáculos</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Entretenimiento' />
              <List link inverted>
                <List.Item as='a'></List.Item>
                <List.Item as='a'>Mundo</List.Item>
                <List.Item as='a'>Tendencias</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Grupo La Patria
              </Header>
              <p>
                © {new Date().getFullYear()}, Hecho Por
                {` `}
                <a href="https://github.com/OvertAmbrosio/test_rep_pe">Overt Ambrosio</a>
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
)

export default Footer