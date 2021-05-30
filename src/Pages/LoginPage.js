import React,{useState} from "react"
import firebase from "../config/firebase"
import {useHistory} from "react-router-dom"
import {Button, Container,Row, Col} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Spinner from 'react-bootstrap/Spinner'
import AlertCustom from "../Components/Forms/AlertCustom"
import avatar from "../LOGOS/avatar.png"

function LoginPage(){
    const [form,setForm] = useState({email:'',password:''})
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState({variant:"" , text:""})
    const history = useHistory();
    const styles = {
        home:{
            marginTop:"80px",
            marginBottom:"250px",
        },
        avatar:{
                height:"80px",
               marginLeft:"130px",
               marginBottom:"30px"
        },
        containerDiv:{ 
            display: "flex",
            height: "10vh",
            width: "10vw", 
            alignItems: "center",
            justifyContent: "centre"
            },
            form:{
                textAlign:"center"
            },
                }

    const handleSubmit = (event)=>{
        event.preventDefault()
        setLoading(true)
        console.log(form)

        /* firebase */
        firebase.auth.signInWithEmailAndPassword(form.email, form.password)
        .then(data=>{
            setLoading(false)
            console.log("Login OK" , data)
            setAlert({variant:"success" , text:"registro correcto"})
            alert("Login completo")
            history.push("/")
        })
        .catch(error=>{
            setLoading(false)
            console.log("error" , error)
            setAlert({variant:"danger" , text:"ha ocurrido un erorr"})            
        })
    }

    const handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value
        console.log(name,value)
        setForm({...form,[name]:value})
    }
    
////////////// AGREGAR UNA CARD AL LOGIN//////////////////////


    return(
        /* */
        <Container style={styles.home}>
            
            
            <Row>
                <Col></Col>
                <Col>
                <div style={styles.containerDiv}>
                        <img src={avatar} style={styles.avatar}></img>
                </div>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <Form.Group controlId="formGroupEmail">
                            <Form.Label>Direccion de Email</Form.Label>
                            <Form.Control type="email" placeholder="email" name="email" value={form.email} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="" name="password" value={form.password} onChange={handleChange} />
                        </Form.Group>
                
                    <Button type="submit" variant="primary" disabled={loading}>
                        {
                            loading &&
                            <Spinner animation="border" size="sm"  /> 
                        }
                    
                        Ingresar
                        </Button>{' '}
                        <AlertCustom variant={alert.variant} text={alert.text} />
                </form>


            </Col>
                <Col></Col>
            </Row>
           
            
        
       
        </Container>
    )
    
}
export default LoginPage;
