import React,{useState} from "react"
import firebase from "../config/firebase"
import {Button, Container} from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'
import AlertCustom from "../Components/Forms/AlertCustom"

function RegistroPage(){
    const [form,setForm] = useState({nombre:'',apellido:'',email:'',password:''})
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState({variant:"" , text:""})
    //ESTILOS
    const styles = {
        home:{
            marginTop:"80px",
            marginBottom:"100px",
        }
      
                }
    
    const handleSubmit = (event)=>{
        event.preventDefault()
        setLoading(true)
        console.log(form)

        //DATOS DESDE FIREBASE
        firebase.auth.createUserWithEmailAndPassword(form.email,form.password)
        .then(data=>{
            console.log("registro",data)
            firebase.firestore.collection("Usuarios").add({
                nombre: form.nombre,
                apellido: form.apellido,
                email: form.email,
                userId: data.user.uid,
            })
            .then(data=>{
                console.log(data);
                setAlert({variant:"success" , text:"registro correcto"})
                setLoading(false)
            })
            .catch(error=>{
                console.log("error",error)
                setAlert({variant:"danger" , text:"hay un error"})
                setLoading(false)
            })
    })
    .catch(error=>{
        console.log("error",error)
        setAlert({variant:"danger" , text:"hay un error"})
        setLoading(false)
    })
    }
    
    const handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value
        console.log(name,value)
        setForm({...form,[name]:value})
    }
    
    return(
        /* */
        <Container style={styles.home}>
        <form onSubmit={handleSubmit}>
                 <Form.Group controlId="formGroupnombre">
                    <Form.Label>Nombre</Form.Label>
                     <Form.Control type="text" placeholder="nombre" name="nombre" value={form.nombre} onChange={handleChange} />
                 </Form.Group>
                <Form.Group controlId="formGroupapellido">
                     <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="apellido" name="apellido" value={form.apellido} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={form.email} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={form.password} onChange={handleChange} />
                </Form.Group>
         
             <Button type="submit" variant="primary" disabled={loading}>
                 {
                     loading &&
                     <Spinner animation="border" size="sm"  /> 
                 }
             
                 Registrarse
                 </Button>{' '}
                 <AlertCustom variant={alert.variant} text={alert.text} />
        </form>
        </Container>
    )
    
}

export default RegistroPage;

/*
 COLORES
  background-color: #17b978;
  background-color: #a7ff83;
}
*/
