import groceryItemList from '../data/groceryItems.json'; 

export function addToBag(id) {
    let item = groceryItemList.find((item) => item.id === id );
    return item;
}