import { ADD_GROCERY, REMOVE_GROCERY } from '../actions'; 
import groceryItemList from '../data/groceryItems.json'; 
import { addToBag } from './helper'; 

export default function grocery (state = groceryItemList, action) {
    switch(action.type) {
        case ADD_GROCERY: 
            //console.log('Add grocery clicked', action); 
            let grocery = state.filter(item=>item.id !== action.id); 
            return grocery;      
            case REMOVE_GROCERY:
            grocery = [...state, addToBag(action.id)]; 
            return grocery;
        default:
          return state; 
    }
}