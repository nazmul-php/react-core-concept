import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Welcome from './component/Welcome'
// import Arrow from './component/Arrow'
// import Welcome from './component/Welcome'
// import Test from './component/Test'
// import StyleComponent from './component/StyleComponent'
import ObjectPass from './component/ObjectPass'

function App() {
  const products =[
    {name:'Photoshop',price:'$200'},
    {name:'Elistater', price:'$100'},
    {name:'Premire Pro', price:'$100'}
  ]
  return (
    <div className="App">
      {/* <StyleComponent name='Billal Hossain' skills ='PS | Ai | PP | AR'></StyleComponent> */}
      {/* <StyleComponent name='Nazmul Huda' skills ='JavaScript | ES6 | REACT | PHP | LARAVEL'></StyleComponent> */}
        
        <ObjectPass product ={products[0]}></ObjectPass>
        <ObjectPass product ={products[1]}></ObjectPass>
        <ObjectPass product ={products[2]}></ObjectPass>
    </div>  
  );
}

export default App;
