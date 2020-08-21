import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const ObjectPass = (props) =>{

        return(
                <div>
                     <div className='row my-5 mx-3'> 
                        <div className='col-md-4'>
                            <div className="card bg-secondary shadow-lg">
                                <div className="card-body">
                                        <h2 className="card-title text-center"> {name}</h2>
                                        <h4 className="text-center">{price}</h4>
                                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aperiam iste obcaecati dicta blanditiis harum, deleniti corrupti dolor facilis vero.</p>
                                        <button className="btn btn-success btn-block mx-auto">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
}

export default ObjectPass