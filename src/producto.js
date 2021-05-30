import React,{Component} from "react"

class Producto extends Component{
    constructor(props){
        super(props)
        this.state={
            productos:[{
                compra:""
            }
                
            ]
        }

        
    }
    comprar = ()=>{

        console.log("comprado");
        this.setState({
            compra:"COMPRADO"
            
        })


    }
    
    render(){
        
        return(
            /* */
            <div>
                <div>Nombre: Celular Samsung</div>
                <div>Descripcion: Smartphone android</div>
                <div>Precio: 50.000$</div>
                <div>SKU: 1564833</div>
                <div>Cantidad Disponible: 12</div>
                <button onClick={this.comprar}>COMPRAR</button>
                <div>{this.state.compra}</div>
            </div>
                
               
                
            
        )
    }
}
export default Producto;