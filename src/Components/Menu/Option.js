import React,{Component} from "react"
import {Link} from "react-router-dom"
import {Nav} from 'react-bootstrap/'


function Option(props){

    const styles = {
        nav:{
         
            color:"black",
        },
       
    }
      
                
        return( 

            <Nav.Link style={styles.nav} as={Link} to={props.path}> {props.label} </Nav.Link>

        )
}
export default Option;


