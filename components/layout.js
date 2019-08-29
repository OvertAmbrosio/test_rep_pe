import React from "react"
import PropTypes from "prop-types"

import Navegacion from "./Navegacion"
import Footer from "./Footer"
import { Grid} from "semantic-ui-react";

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
          <Footer/>
        </div>
      </>
    )
  }
  
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
  export default Layout