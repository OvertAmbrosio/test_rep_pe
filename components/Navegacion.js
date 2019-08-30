import Link from 'next/link'
import React, { Component} from "react";

//Imagen
import Logo from './logo.png'
//Componentes Semantic Ui
import { Menu, Segment, Grid, Button, Icon } from 'semantic-ui-react'

export default class Navegacion extends Component {
  state = { dropdownMenuStyle: {
              display: "none",
              activeItem: "inicio"
            }
          }

  handleToggleDropdownMenu = () => {
    let newState = Object.assign({}, this.state);
    if (newState.dropdownMenuStyle.display === "none") {
      newState.dropdownMenuStyle = { display: "flex" };
    } else {
      newState.dropdownMenuStyle = { display: "none" };
    }

    this.setState(newState);
  };

  render() {
    const { activeItem } = this.state.dropdownMenuStyle

    return (
      <Segment className="bg-primary cabecera">
        <Grid className="tablet computer only">
          <Grid.Row>
            <Grid.Column className="centered">
              <Menu secondary>
                  <img src={Logo}/>
                <Menu.Menu position="right" >
                  <Link href="/">
                    <Menu.Item  
                      as="a"
                      className="item-white"
                      name='inicio'
                      icon="home"
                      active={activeItem === 'inicio'}/>
                  </Link>
                  <Link href="/">
                    <Menu.Item  
                      as="a"
                      className="item-white"
                      name='noticias'
                      icon="newspaper"
                      active={activeItem === 'noticias'}/>
                  </Link>
                  <Link href="/">
                    <Menu.Item  
                      as="a"
                      className="item-white"
                      name='RTV'
                      icon="video camera"
                      active={activeItem === 'rtv'}/>
                  </Link>
                  <Link href="/">
                    <Menu.Item  
                      as="a"
                      className="item-white"
                      name='opinion'
                      icon="coffee"
                      active={activeItem === 'opinion'}/>
                  </Link>
                  <Link href="/">
                    <Menu.Item  
                      as="a"
                      className="item-white"
                      name='entretenimiento'
                      icon="play"
                      active={activeItem === 'entretenimiento'}/>
                  </Link>
                  <Link href="/">
                    <Menu.Item  
                      as="a"
                      className="item-white"
                      name='destacados'
                      icon="fire"
                      active={activeItem === 'destacados'}/>
                  </Link>
                  <Link href="/">
                    <Menu.Item  
                      as="a"
                      className="item-white"
                      name='perú'
                      icon="target"
                      active={activeItem === 'perú'}/>
                  </Link>
                  <Link href="/">
                    <Menu.Item  
                      as="a"
                      className="item-white"
                      name='mas sitios'
                      icon="plus"
                      active={activeItem === 'mas sitios'}/>
                  </Link>
                </Menu.Menu>
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid padded className="mobile only">
          <Menu borderless fluid size="huge" className="bg-primary">
              <img src={Logo}/>
            <Menu.Menu position="right">
              <Menu.Item>
                <Button
                  icon
                  basic inverted
                  toggle
                  onClick={this.handleToggleDropdownMenu}
                >
                <Icon name="content" />
                </Button>
              </Menu.Item>
            </Menu.Menu>
            <Menu
              vertical
              borderless
              fluid
              style={this.state.dropdownMenuStyle}
              className="bg-primary"
            >
              <Link href="/">
                <Menu.Item  
                  as="a"
                  className="item-white"
                  name='inicio'
                  icon="home"
                  active={activeItem === 'inicio'}/>
              </Link>
              <Link href="/">
                <Menu.Item  
                  as="a"
                  className="item-white"
                  name='noticias'
                  icon="newspaper"
                  active={activeItem === 'noticias'}/>
              </Link>
              <Link href="/">
                <Menu.Item  
                  as="a"
                  className="item-white"
                  name='RTV'
                  icon="video camera"
                  active={activeItem === 'rtv'}/>
              </Link>
              <Link href="/">
                <Menu.Item  
                  as="a"
                  className="item-white"
                  name='opinion'
                  icon="coffee"
                  active={activeItem === 'opinion'}/>
              </Link>
              <Link href="/">
                <Menu.Item  
                  as="a"
                  className="item-white"
                  name='entretenimiento'
                  icon="play"
                  active={activeItem === 'entretenimiento'}/>
              </Link>
              <Link href="/">
                <Menu.Item  
                  as="a"
                  className="item-white"
                  name='destacados'
                  icon="fire"
                  active={activeItem === 'destacados'}/>
              </Link>
              <Link href="/">
                <Menu.Item  
                  as="a"
                  className="item-white"
                  name='perú'
                  icon="target"
                  active={activeItem === 'perú'}/>
              </Link>
              <Link href="/">
                <Menu.Item  
                  as="a"
                  className="item-white"
                  name='mas sitios'
                  icon="plus"
                  active={activeItem === 'mas sitios'}/>
              </Link>
            </Menu>
          </Menu>
        </Grid>
      </Segment>
    );
  }
}

