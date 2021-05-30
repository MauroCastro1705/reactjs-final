import React,{useState} from "react"
import {Link} from "react-router-dom"
import AlertCustom from "../Components/Forms/AlertCustom"
import Card from 'react-bootstrap/Card'
import {Button} from 'react-bootstrap'

function Producto(props){

    const {data} = props  

    const verDetalle = (props.verDetalle!==false?true:false); 
    const extendida = (props.extendida==true?true:false); 

    //TRAEMOS PROPS 
    const id = props.id;
    const {price,name, img, description}=props.data

    //ALERTA DE BOOTSTRAP
    const [alert, setAlert] = useState({variant:"" , text:""});

    // ESTILOS  de producto
    const styles = {
        card:{  width: '20rem',
                marginBottom:"10px" ,
                borderColor:"#3d5af1",
                webkitBoxShadow: "0px 7px 20px 9px rgba(0,0,0,0.16)",
                mozBoxShadow: "0px 7px 20px 9px rgba(0,0,0,0.16)",
                boxShadow: "0px 7px 20px 9px rgba(0,0,0,0.16)",
                },

        button:{
            marginLeft:"5px",
            backgroundColor:"#3d5af1"
            
        },
        link:{
            color:"#FFFFFF"
        }
    }
        
//BOTON COMPRAR
    const comprar = ()=>{
        console.log("compra")
        if(data.stock-1===0){
            setAlert({variant:"danger" , text:"No hay Stock"})
        }else{
            
            setAlert({variant:"success" , text:"Gracias por su Compra!"})
        }
    }


    return(
        

        <div> 
         


            <Card style={styles.card}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                        <Card.Text>
                
                        Precio: ${price}
                        <br></br>
                        
                        {
                            extendida && 
                            <>
                                <Card.Text>
                                Descripcion: {description}
                                <br></br>
                                id: {id}
                                </Card.Text>
                            </>
                        }
                                </Card.Text>
                    <Button style={styles.button} variant="primary" onClick={comprar}>Comprar</Button>
                    {
                            verDetalle && 
                                <Button style={styles.button} variant="primary"><Link style={styles.link} to={"/producto/"+id}>Ver Detalle</Link></Button>
                        }
                        
            
                </Card.Body>
                
            </Card>
            <AlertCustom variant={alert.variant} text={alert.text} />
          
        </div>
    )
}
export default Producto;

