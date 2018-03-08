import React, { Component } from 'react';

import { connect } from 'react-redux'; 

import { removeGroceryById, addPocketMoneyById } from '../actions'; 

class ShoppingBag extends Component {

    displayShoppingBag() {
        if(this.props.shoppingBag.length > 0) {
          return (
            <ul className="list-group">
                    {this.props.shoppingBag.map((item) => {
                        return <li key={item.id} 
                        className="list-group-item shopping-color"
                        onClick={() => { 
                            this.props.removeGroceryById(item.id);
                            this.props.addPocketMoneyById(item.id);
                          }
                        }
                        >             
                        <b>{item.name}</b> -
                        <span className="label label-info">${item.cost}</span>- 
                        <span className="label label-danger">{item.calories} kcal</span>- 
                        <span className="label label-success">{item.weight} mg</span>
                        </li>
                    })}
              </ul>

          )
        } else {
            return (
             <ul className="list-group">
                   <li className="list-group-item text-success">PLEASE ADD ITEMS TO THE BAG </li>
             </ul>
            )

        }
    }

    render(){
        //console.log('ShoppingBag props', this.props.shoppingBag); 
        return (
            <div className="col-md-4 bg-primary sections">
              <h2 className="text-center"> Shopping Bag Items </h2>
             {this.displayShoppingBag()}
            </div>
        )
    }
}

//mapStateToProps takes state from reducer and makes the data available to use in the above component as props 
function mapStateToProps(state) {
    //console.log(state);
    return {
     shoppingBag: state.shoppingBag 
    }
  }
  
  //mapStateToprops connects with above component called Grocery 
  export default connect(mapStateToProps, {removeGroceryById, addPocketMoneyById}) (ShoppingBag); 