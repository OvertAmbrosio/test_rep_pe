import { Link } from 'next/link'

import React, { Component} from "react";

import { Input, Menu, Segment, Grid, Button, Icon, Popup, Header,  List } from 'semantic-ui-react'

export default class Navegacion extends Component {
  state = { dropdownMenuStyle: {
              display: "none",
              activeItem: "inicio"
            }
          }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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
                <Menu.Item className="header item-white">
                  <h1>EsNovel</h1>
                </Menu.Item>
                <Menu.Menu position="right" >
                  <Menu.Item  
                    className="item-white"
                    as= { Link }
                    to= '/'
                    name='inicio'
                    icon="home"
                    active={activeItem === 'inicio'} 
                    onClick={this.handleItemClick} />
                  <Menu.Item
                    className="item-white"
                    as= { Link }
                    to= '404'
                    name='categorias'
                    icon='fire'
                    active={activeItem === 'categorias'}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    className="item-white"
                    as= { Link }
                    to= '/'
                    name='novelas'
                    icon= 'grid layout'
                    active={activeItem === 'novelas'}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    className="item-white"
                    as= { Link }
                    to= '/'
                    content= 'Mi Biblioteca'
                    name='mi_biblioteca'
                    icon= 'book'
                    active={activeItem === 'mi_biblioteca'}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                  </Menu.Item>
                  <Popup position='bottom center' wide='very' className='pl-0' trigger={
                    <Menu.Item
                      className="item-white"
                      as= { Link }
                      to= '/'
                      name='login'
                      icon= 'sign in'
                      active={activeItem === 'login'}
                      onClick={this.handleItemClick}
                    />
                  } on='click'>
                    <Grid divided columns='1'>
                      <Grid.Column>
                        <Header as='h4' textAlign='center'>
                          <Header.Content className='text-primary'>
                            ¡Bienvenido a EsNovel!
                          </Header.Content>
                        </Header>
                          <List divided selection>
                            <List.Item>
                              <Button color='facebook' circular icon='facebook'/> Acceder con Facebook
                            </List.Item>
                            <List.Item>
                              <Button color='twitter' circular icon='twitter'/> Acceder con Twitter
                            </List.Item>
                            <List.Item>
                              <Button color='google plus' circular icon='google'/> Acceder con Google
                            </List.Item>
                          </List>
                        <Header as='h5' textAlign='center'>
                          <Header.Content className='text-primary'>
                            ¿Aún no tienes una cuenta? <br></br>
                            <Link to='/'>
                              <Header.Subheader as='a' to='/'>
                                <Icon name='user plus' className='text-primary'/>Registrate
                              </Header.Subheader>
                            </Link>
                          </Header.Content>
                        </Header>
                      </Grid.Column>
                    </Grid>
                  </Popup>
                </Menu.Menu>
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid padded className="mobile only">
          <Menu borderless fluid size="huge" className="bg-primary">
            <Menu.Item header as="a" className="item-white">
              EsNovel
            </Menu.Item>
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
              <Menu.Item 
                className="item-white"
                as= { Link }
                to= '/'
                name='inicio'
                icon="home"
                active={activeItem === 'inicio'} 
                onClick={this.handleItemClick} />
              <Menu.Item
                className="item-white"
                as= { Link }
                to= '404'
                name='categorias'
                icon='fire'
                active={activeItem === 'categorias'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                className="item-white"
                as= { Link }
                to= '/'
                name='novelas'
                icon= 'grid layout'
                active={activeItem === 'novelas'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                className="item-white"
                as= { Link }
                to= '/'
                content= 'Mi Biblioteca'
                name='mi_biblioteca'
                icon= 'book'
                active={activeItem === 'mi_biblioteca'}
                onClick={this.handleItemClick}
              />
              <Menu.Item>
                <Input icon='search' placeholder='Search...' />
              </Menu.Item>
              <Menu.Item
                className="item-white"
                as= { Link }
                to= '/'
                name='login'
                icon= 'user'
                active={activeItem === 'login'}
                onClick={this.handleItemClick}
              />
            </Menu>
          </Menu>
        </Grid>
      </Segment>
    );
  }
}

