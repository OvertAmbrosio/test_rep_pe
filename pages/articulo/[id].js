import fetch from 'isomorphic-unfetch'
import React from 'react'
import { Segment } from 'semantic-ui-react'

//Estilos
import 'semantic-ui-css/semantic.min.css'

import Layout from "../../components/layout"

const Articulo = ({ articulo }) =>( 
  <Layout>
    <Segment padded className="mb-2">
    {articulo.name}
    </Segment>
  </Layout>
)

Articulo.getInitialProps = async ({ query: { id } }, res) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const articulo = await response.json()

  return { articulo }
}

export default Articulo