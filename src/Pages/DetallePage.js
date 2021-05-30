import React,{useState,useEffect} from "react"
import Producto from "../Components/Producto"
import firebase from "../config/firebase"


function DetallePage(props) {

    const id = props.match.params.id;
    const [producto,setProducto] = useState({});
    const [loading,setLoading] = useState(true);

    useEffect(
        ()=>{

            firebase.firestore.doc("Productos/" + id)
            .get()
            .then(doc=>{
                console.log("DOC", doc)
                setProducto(doc)
                setLoading(false)
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
            
            <>
            <Producto id={producto.id} data={producto.data()} verDetalle={false} extendida={true}/>
  
            </>
        )
    }
        
    
}
export default DetallePage;

