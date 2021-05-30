import React,{Component} from "react"
import Option from "./Option"
import {Navbar,Nav, Form, Button, FormControl} from 'react-bootstrap/'
import logo from "../../LOGOS/logotienda.png"


class Menu extends Component{

    
    
    render(){
        const styles = {
            nav:{
                height:"50px"
                
            },
            links:{
                marginLeft:"20px"
            }
                    }
        return(
                    <div>
                    

                    <Navbar bg="light" variant="light" style={styles.nav}>
                    <Navbar.Brand href="#home">
                    <img
                            alt="logo tienda"
                            src={logo}                           
                            height="50"
                            className="d-inline-block align-top"
                        />{''}
                        </Navbar.Brand>
                        <h3>Electro Tienda</h3>
                        

                    <Nav className="mr-auto" style={styles.links}>

                                <Option path="/" label="Inicio"  />
                               <Option path="/alta" label="Registro"  />
                               <Option path="/login" label="Login"  />
                            
                    </Nav>
                    <Form inline>
                      <FormControl type="text" placeholder="Buscar Productos" className="mr-sm-2" />
                      <Button variant="outline-primary">Buscar</Button>
                    </Form>
                  </Navbar>
                  </div>

          
        )
    }
}
export default Menu;


