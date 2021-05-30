
import React from "react"
import {Nav} from 'react-bootstrap'

function NavegacionDetalle(){

    const styles = {
        
        jumbo:{
            marginTop:"20px",
            marginLeft:"65px",
            backgroundColor:"" ,
            height:"60px", 
            width:"90%"

        },
}
return(


    <Nav fill  style={styles.jumbo} defaultActiveKey="/home">


                <Nav.Item>
                    <Nav.Link href="/home">Tv, Audio y Video</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Celulares, Notebooks y Tecnología</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Electrodomésticos y Aires Ac.</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">Hogar, Muebles y Jardín</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="link-1">Salud, Belleza y Fitness</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="link-1">Bebés y Niños </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="link-1">Más categorías </Nav.Link>
                </Nav.Item>

            </Nav>
)

}

export default NavegacionDetalle;