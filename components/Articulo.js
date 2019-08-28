import React, { Component, forwardRef } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

//componentes
import { Grid, Image, Segment, Icon, Item, Label } from 'semantic-ui-react'

const Titulo = React.forwardRef(({titulo}, ref) => (
  <Item.Header>{titulo}</Item.Header>
))

export default class Articulo extends Component{
  render (){
    return (
    <Grid.Column >
    <Segment className='border-none'>
      <Item.Group>
        <Item>
          <Item.Content>
            <Link href='/articulo/[id]' as={`/articulo/${this.props.link}`} passHref>
              <Titulo titulo= {this.props.titulo}/>
            </Link>
          </Item.Content>
        </Item>
        <Image 
          as='div'
          fluid
          label={{ color: 'blue', content: this.props.tag, ribbon: true }}
          src='http://placehold.it/250x250'
        />
        <Label className='border-none' attached='bottom' basic><span><Icon name='mail'/>{this.props.email}</span></Label>
      </Item.Group>   
    </Segment>     
  </Grid.Column>
    );
  }
}


