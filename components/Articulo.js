import PropTypes from "prop-types"
import Link from 'next/link'

//componentes
import { Grid, Image, Segment, Icon, Item, Label } from 'semantic-ui-react'



const Articulo = ({titulo, link, tag}) => (
  <Grid.Column >
    <Segment className='border-none'>
      <Item.Group>
        <Item>
          <Item.Content>
            <Link href={`/articulo/${link}`}>
              <Item.Header as='a'>{titulo}</Item.Header>
            </Link>
          </Item.Content>
        </Item>
        <Image 
          as='div'
          className='image-index'
          fluid
          label={{ color: 'blue', content: tag, ribbon: true }}
          src='http://placehold.it/250x250'
        />
        <Label className='border-none' attached='bottom' basic><span><Icon name='time'/>Hace 30 min.</span></Label>
      </Item.Group>   
    </Segment>     
  </Grid.Column>
)

Articulo.propTypes = {
  titulo: PropTypes.string,
  link: PropTypes.string,
  tag: PropTypes.string
}

Articulo.defaultProps = {
  titulo: ``,
  link: ``,
  tag: ``
}

export default Articulo