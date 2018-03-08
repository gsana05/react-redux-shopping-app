import React, { Component } from 'react';

import { connect } from 'react-redux'; 

class Stats extends Component {
    cost() {
        let totalCost = 0;
        this.props.shoppingBag.forEach(item => totalCost += item.cost);
        return totalCost;
    }

    calories() {
        let totalCalories = 0;
        this.props.shoppingBag.forEach(item => totalCalories += item.calories);
        return totalCalories;
    }

    weight() {
        let totalWeight = 0;
        this.props.shoppingBag.forEach(item => totalWeight += item.weight);
        return totalWeight;
    }


    render(){
        //console.log('from the stats', this.props);
        return (
            <div className="col-md-3 bg-danger sections">
              <h2 className="text-center"> Stats Items </h2>
              <ul className="list-group">
                    <li className="list-group-item">Cost ${this.cost()}</li>
                    <li className="list-group-item">Calories {this.calories()} kcal</li>
                    <li className="list-group-item">Weight {this.weight()} mg </li>
              </ul>
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
  export default connect(mapStateToProps, null) (Stats); 