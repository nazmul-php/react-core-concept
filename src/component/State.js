import React,{Component} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class State extends Component{

    constructor(){
        super()
        this.state={
            name:'Programmer Nazmul Hdua',
            age: 25,
            profession: 'Software Enginner'
        }
    }

    render(){
        return(
            <div className='jumbotron'>
                <h1 >{this.state.name}</h1>
                <h2 >{this.state.age}</h2>
                <h3 >{this.state.profession}</h3>
            </div>
        )
    }
}

export default State