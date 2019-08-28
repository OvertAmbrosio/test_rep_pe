import PropTypes from "prop-types"
import Link from 'next/link'

//componentes
import { Grid, Image, Segment, Icon, Item, Label } from 'semantic-ui-react'

const Articulo = ({titulo, link, tag, email}) => (
  <Grid.Column >
    <Segment className='border-none pointer'>
      <Link href='/articulo/[id]' as={`/articulo/${link}`}>
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header as='a'>{titulo}</Item.Header>
            </Item.Content>
          </Item>
          <Image 
            as='div'
            className='image-index'
            fluid
            label={{ color: 'blue', content: tag, ribbon: true }}
            src='http://placehold.it/250x250'
          />
          <Label className='border-none' attached='bottom' basic><span><Icon name='mail'/>{email}</span></Label>
        </Item.Group>   
      </Link>
    </Segment>     
  </Grid.Column>
)

Articulo.propTypes = {
  titulo: PropTypes.string,
  link: PropTypes.string,
  tag: PropTypes.string,
  email: PropTypes.string
}

Articulo.defaultProps = {
  titulo: ``,
  link: ``,
  tag: ``,
  email: ``
}

export default Articulo