
import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const getAlert=(a)=>{
    alert(a)
}

const Arrow=()=>{
        return(<button onClick={getAlert.bind(this,'Alert By Arrow Function')} className='btn btn-success p-3 mt-5'>Arrow Boutton</button>)
}

export default Arrow