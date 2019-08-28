import fetch from 'isomorphic-unfetch'

//Estilos
import 'semantic-ui-css/semantic.min.css'
import '../css/styles.css'
//Componentes
import { Grid, Segment} from 'semantic-ui-react'

import Layout from "../components/layout"
import Articulo from "../components/Articulo"

const Index = (props) => (
  <Layout>
    <Segment className='border-none mb-2' textAlign='left' clearing>
      <Grid stackable columns={3}>
        {props.articulos.map(articulo => (
          <Articulo key={articulo.id} titulo={articulo.name} link={`/articulo/${articulo.id}`} tag={articulo.username} email={articulo.email}/>
        ))}
      </Grid>
    </Segment>
  </Layout>
)


Index.getInitialProps = async function() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    articulos: data.map(entry => entry)
  };
};


export default Index;