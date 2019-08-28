import React from "react"
import PropTypes from "prop-types"

import Navegacion from "./Navegacion"
import { Grid, Column } from "semantic-ui-react";
 

const Layout = ({ children }) => {  
    return (
      <>
        <Navegacion />
        <div>
          <Grid stackable>
            <Grid.Row className="centered">
              <Grid.Column width={13}>
                <main>{children}</main>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <footer>
            © {new Date().getFullYear()}, Hecho Por
            {` `}
            <a href="https://github.com/OvertAmbrosio/test_rep_pe">Overt Ambrosio</a>
          </footer>
        </div>
      </>
    )
  }
  
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
  export default Layout