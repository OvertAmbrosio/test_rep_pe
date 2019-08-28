import React from 'react'
import Link from 'next/link'

//Estilos
import 'semantic-ui-css/semantic.min.css'
import '../css/styles.css'
//Componentes
import { Grid, Segment} from 'semantic-ui-react'

import Layout from "../components/layout"
import Articulo from "../components/Articulo"

const Index = props => (
  <Layout>
    <Segment className='border-none mb-2' textAlign='left' clearing>
      <Grid stackable columns={4}>
        {props.articulos.map(articulo => (
          <Articulo titulo={articulo.name} link={articulo.id} tag={articulo.username}/>
        ))}
      </Grid>
    </Segment>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    articulos: data.map(entry => entry)
  };
};


export default Index;