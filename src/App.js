import React, { Component } from 'react';
import Grocery from './components/Grocery'; 
import ShoppingBag from './components/ShoppingBag'; 
import Stats from './components/Stats'; 
import PocketMoney from './components/PocketMoney'; 

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center"> 
          <div className="jumbotron">
            <h1 className="display-4">Shopping App</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra 
            attention to featured content or information.</p>
          </div>
        </div> 
        <PocketMoney />
        <div className="row">
        <Grocery />
        <ShoppingBag />
        <Stats />
      </div>
    </div>
    );
  }
}

export default App;
