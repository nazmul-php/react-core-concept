import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const StyleComponent=(props)=>{
    // let style = {color:'red'}
    return(
        <div className='mx-auto mt-5 jumbotron'>
            <h1 style={{backgroundColor:'orange', padding:'5px', borderRadius:'5px', color:'blue'}}>Programmer {props.name}</h1>
            <p>{props.skills}</p>
        </div>
    )

}

export default StyleComponent