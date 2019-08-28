import React from "react"
import PropTypes from "prop-types"

import Navegacion from "./Navegacion"

const Layout = ({ children }) => {  
    return (
      <>
        <Navegacion />
        <div>
          <main>{children}</main>
          <footer>
            
          </footer>
        </div>
      </>
    )
  }
  
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
  export default Layout