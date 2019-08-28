import React from 'react';
import { Grid, Image, Segment, Icon, Item, Label } from 'semantic-ui-react'

const Articulos = () => (
  <Segment className='border-none mb-2' textAlign='left' clearing>
    <Grid stackable columns={4}>
      <Grid.Column >
        <Segment className='border-none'>
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Header as='a'>The Favored Son of Heaven</Item.Header>
              </Item.Content>
            </Item>
            <Image 
              as='div'
              className='image-index'
              fluid
              label={{ color: 'blue', content: 'Capitulo 352', ribbon: true }}
              src='http://placehold.it/200x200'
            />
            <Label className='border-none text-primary' attached='bottom' basic><span className='justify-start'>AOA</span><span className='justify-end'><Icon name='time'/>Hace 30 min.</span></Label>
          </Item.Group>   
        </Segment>     
      </Grid.Column>
    </Grid>
  </Segment>
)

export default Articulos