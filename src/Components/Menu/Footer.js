import React,{Component} from "react"
import Linea from "../../Components/Linea"
import {Navbar,Nav, Form,FormControl, Button} from 'react-bootstrap/'


class Footer extends Component{
    
    render(){
        const styles = {
            nav:{paddingLeft:"80px",
                marginTop:"50px"
            },
            links:{
                
                marginLeft:"80px",
                marginBottom:"10px",             
            },
           
            button:{
                marginTop:"10px",
                backgroundColor:"#3d5af1"
                
            },
                    }
   
        return(
            <div >
                <Linea/>
                
                    <Navbar style={styles.nav} sticky="bottom"  >
                    <Form >
                    <Form.Label>Recibí ofertas y promociones</Form.Label>
                        <FormControl type="email" placeholder="Ingresa tu mail" className=" mr-sm-2" />
                        <Button type="submit" style={styles.button}>Subscribirme</Button>
                    </Form>
                    
                    <Navbar.Text style={styles.links} >
                        <h6>Ayuda</h6>
                        <a href="#">Centro de ayuda</a>
                        <br></br>
                        <a href="#" >Contactanos</a> 
                        <br></br>
                        <a href="#" >Sucursales </a> 
                    
                    </Navbar.Text>                    
                  
                    <Navbar.Text style={styles.links} >
                        <h6>Recomendados</h6>
                        <a href="#" >Smart Tv</a>
                        <br></br>
                        <a href="#" >Celulares</a> 
                        <br></br>
                        <a href="#" >Aire Acondicionado </a> 
                    
                    </Navbar.Text> 
                    <Navbar.Text style={styles.links} >
                        <h6>Beneficios</h6>
                        <a href="#">Club Personal</a>
                        <br></br>
                        <a href="#" >YPF</a> 
                        <br></br>
                        <a href="#">365</a> 
                    
                    </Navbar.Text> 
                  
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text style={styles.texto}>
                        2021, Todos los Derechos reservados 
                        </Navbar.Text>
                    </Navbar.Collapse>
                    </Navbar> 

            </div>
        )
    }
}
export default Footer;


