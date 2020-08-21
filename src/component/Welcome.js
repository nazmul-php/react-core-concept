import React,{Component} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Welcome extends Component{
    getAlert(a){
        alert(a)
    }
    
    render(){
        return (
            <div>
                <h1>Greetings From Class</h1>
                <button className='btn btn-success p-3 rounded' onClick={this.getAlert.bind(this,'I am from param...')}>Click Me</button>
            </div>
            )
    }
}

export default Welcome