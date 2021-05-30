import React,{useState,useEffect} from "react"
import Producto from "../Components/Producto"
import firebase from "../config/firebase"
import CardDeck from 'react-bootstrap/CardDeck'
import { Container } from "react-bootstrap";
import NavegacionDetalle from "../Components/NavegacionDetalle"


function HomePage(props) {
    
    const [productos,setProductos] = useState([]);
    const [loading,setLoading] = useState(true);
    const styles = {
        home:{
            marginBottom:"250px"
        }
      
                }

    //componentDidMount
    useEffect(
        ()=>{
           
            firebase.firestore.collection("Productos")
            .get()
            .then(querySnapshot=>{
                console.log(querySnapshot.docs)
                setProductos(querySnapshot.docs)
                console.log("productos", querySnapshot.docs)
                setLoading(false)
                querySnapshot.docs.map(doc=>{
                    console.log(doc.id , doc.data())
                })
            })
        },
        []
    )

   
    
    if(loading){
        return(
            /* */
            <div>
                loading...
            </div>
        )
    }else{
        return(
            /* */
            <div style={styles.home}>
                <NavegacionDetalle/>
                <Container>
             
                
                
                <CardDeck>
                {productos.map(producto=><Producto key={producto.id} id={producto.id} data={producto.data()}  />)}
                </CardDeck>
                </Container>
                
            
            </div>
        )
    }
        
    
}
export default HomePage;

