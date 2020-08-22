import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Welcome from './component/Welcome'
// import Arrow from './component/Arrow'
// import Welcome from './component/Welcome'
// import Test from './component/Test'
// import StyleComponent from './component/StyleComponent'
import ObjectPass from './component/ObjectPass'
import StateComponent from './component/StateComponent'
import EffectsComponent from './component/EffectsComponent'
import State from './component/State'

function App() {
  const products =[
    {name:'Adobe Photoshop',price:'$200'},
    {name:'After Effects', price:'$300'},
    {name:'Premire Pro', price:'$500'}
  ]

 
  return (
    <div className="App">
      {/* <StyleComponent name='Billal Hossain' skills ='PS | Ai | PP | AR'></StyleComponent> */}
      {/* <StyleComponent name='Nazmul Huda' skills ='JavaScript | ES6 | REACT | PHP | LARAVEL'></StyleComponent> */}

        {/* {products.map(product =><ObjectPass product={product}></ObjectPass>)} */}

        {/* <StateComponent></StateComponent> */}
        
        {/* <EffectsComponent></EffectsComponent> */}
        <State></State>
    </div>  
  );
}

export default App;
