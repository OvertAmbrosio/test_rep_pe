import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

//componentes
import { Grid, Image, Segment, Icon, Item, Label, Ref } from 'semantic-ui-react'

const Titulo = React.forwardRef(({titulo, link}, ref) => (
  <Item.Header><a ref={ref} href={`/articulo/${link}`}>{titulo}</a></Item.Header>
))

export default class Articulo extends Component{

  createdRef = React.createRef()
  functionalRef = null

  handleRef = (node) => {
    this.functionalRef = node
  }

  render (){
    return (
    <Grid.Column >
      <Segment className='border-none'>
        <Item.Group>
          <Item>
            <Item.Content>
              <Link href='/articulo/[id]' as={`/articulo/${this.props.link}`}>
                <Ref innerRef={this.createdRef}>
                  <Titulo titulo={this.props.titulo} link={this.props.link}/>
                </Ref>
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


