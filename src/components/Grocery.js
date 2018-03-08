import React, { Component } from 'react';

import { connect } from 'react-redux'; 

import { addGroceryById, removePocketMoneyById } from '../actions'; 

class Grocery extends Component {
    render(){
        //console.log('this.props', this.props); 
        return (
            <div className="col-md-4 bg-success sections">
              <h2 className="text-center"> Grocery Items </h2>
              <ul className="list-group">
              {this.props.grocery.map((item) => {
                  return <li key={item.id} 
                  className="list-group-item"
                  onClick={() => {
                      this.props.addGroceryById(item.id);
                      this.props.removePocketMoneyById(item.id); 
                    }
                }
                   >
                  
                  <b>{item.name}</b> 
                  -
                  <span className="label label-info">${item.cost}</span>
                  - 
                  <span className="label label-danger">{item.calories} kcal</span>
                  - 
                  <span className="label label-success">{item.weight} mg</span>
                  </li>
              })}
              </ul>
            </div>
        )
    }
}

//mapStateToProps takes state from reducer and makes the data available to use in the above component as props 
function mapStateToProps(state) {
  //console.log(state);
  return {
   grocery: state.grocery
  }
}

//mapStateToprops connects with above component called Grocery 
export default connect(mapStateToProps, { addGroceryById, removePocketMoneyById }) (Grocery); 

