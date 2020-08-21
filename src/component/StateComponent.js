import React,{useState} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function StateComponent(){

    const [count, getCount] = useState(10)

    return(
        <div className='jumbotron'>
            <h2>Count: {count}</h2>
            <button className='btn btn-danger mr-3' onClick={()=>getCount(count-1)}>Decrease</button>
            <button className='btn btn-success' onClick={()=>getCount(count+1)}>Increase</button>
        </div>
    )

}
export default StateComponent