import React,{useState,useEffect} from "react"
import firebase from "../config/firebase"
import AlertCustom from "../Components/Forms/AlertCustom"
import {Button, Container, Row, Col,ListGroup,Nav, Card} from 'react-bootstrap'
import masterlogo from "../LOGOS/masterlogo.png"
import naranjalogo from "../LOGOS/naranjalogo.png"
import visalogo from "../LOGOS/visalogo.png"
import Linea from "../Components/Linea"
import NavegacionDetalle from "../Components/NavegacionDetalle"

function NewDetallePage(props){

    //TRAEMOS PROPS 
    const id = props.match.params.id;
    const [producto,setProducto] = useState({});
    //TRAEMOS DATA FIREBASE
    useEffect(
        ()=>{

            firebase.firestore.doc("Productos/" + id )
            .get()
            .then(doc=>{
                console.log("Documentos nuevos", doc.data())                
                setProducto(doc.data())
                
               
            })
        },
        []
    )


    //DATA Y CONSTANTES
    const price=producto.price
    const name=producto.name
    const img=producto.img
    const desc=producto.description
    const stock=producto.stock

     //CALCULO DE CUOTAS
     var precioFinal12 = +((price / 12).toFixed(2));
     var precioFinal9 = +((price / 9).toFixed(2));

    console.log("DATOS TRAIDOS",name,price,img)


    //ALERTA DE BOOTSTRAP
    const [alert, setAlert] = useState({variant:"" , text:""});

    // ESTILOS  de producto
    const styles = {
            button:{
               
                backgroundColor:"#3d5af1"
                
            },
            detalle:{

                marginTop:"10px",
                marginBottom:"250px"
            },
            
            comprar:{ 

                paddingLeft:"10px",
            },
            bancos:{
                marginLeft:"10px",
                width:"28rem"
            },
            imgBancos:{
                height:"30px",
                
            },

          

    }
    
        
//BOTON COMPRAR
    const comprar = ()=>{
        console.log("Efectuando compra")
        if(producto.stock-1===0){
            setAlert({variant:"danger" , text:"No hay Stock"})
            console.log("compra fallida")
        }else{
            
            setAlert({variant:"success" , text:"Gracias por su Compra!"})
            console.log("compra exitosa")
        }
    }

    return(
        
        
    <div style={styles.detalle}>

            <NavegacionDetalle/>
        <Container>            
        <Row>
             <Col sm={7}>
                    <img src={img}></img>
                </Col>
                <Col style={styles.comprar} sm={5}>
                     <h3>{name}</h3>
                     <h4>Precio: ${price}</h4>
                     <h6>id del producto: {id}</h6>
                     <Linea/>
                     <Card style={styles.bancos}>
                            <Card.Body>¡Aprovechá nuestras promociones bancarias!</Card.Body>
                            <ListGroup>
                                <ListGroup.Item> <img src={masterlogo} style={styles.imgBancos}></img> 12 cuotas sin interés de ${precioFinal12}  </ListGroup.Item>
                                <ListGroup.Item><img src={visalogo} style={styles.imgBancos}></img>12 cuotas sin interés de ${precioFinal12}   </ListGroup.Item>
                                <ListGroup.Item><img src={naranjalogo} style={styles.imgBancos}></img>9 cuotas sin interés de ${precioFinal9}   </ListGroup.Item>
                                <ListGroup.Item><a href="#">Ver cuotas y todos los medios de pago</a></ListGroup.Item>
                            </ListGroup>
                            <Button style={styles.button} variant="primary" onClick={comprar}>Comprar</Button> 
                            <AlertCustom variant={alert.variant} text={alert.text} />
                        </Card>                    
            </Col>   
        </Row>
        <Linea/>
            <h3>Descripcion: </h3>
            {desc}
            <Linea/>
            </Container>
    </div>
    )
    }
    
export default NewDetallePage;

