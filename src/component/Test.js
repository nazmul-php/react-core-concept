import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Test(props){
    var style = {color: 'red'}
    return(
        <h1 style={style}>Welcome Porgrammer {props.name}</h1>
    )
}

export default Test


