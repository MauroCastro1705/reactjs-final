import React from "react"
import Alert from 'react-bootstrap/Alert'

function AlertCustom(props){

    const {variant , text} = props
    const styles={
        alert:{
            marginTop: "10px"
        }
    }

    return(


        <Alert  variant={variant} style={styles.alert}  >
             {text}
        </Alert>


    )   
}

export default AlertCustom;