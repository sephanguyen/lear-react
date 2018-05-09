import * as types from '../constants/ActionType'
import { find } from 'lodash'

var data = JSON.parse(localStorage.getItem('CART'));

// var inittialState = data ? data : [];

var inittialState = [{
    product: {
        id: 1,
        name: 'Iphone 7 plus',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description: 'San pham apple san xuat',
        price: 700,
        inventory: 20,
        rating: 5
    },
    quantity: 5
},{
    product:  {
        id : 2,
        name : 'Samsung galaxy s7',
        image : 'https://i.ebayimg.com/images/g/0hUAAOSwqURasIhf/s-l500.jpg',
        description : 'San pham do sam sung san xuat',
        price : 400,
        inventory : 10,
        rating: 3
    },
    quantity: 5
}]

const cart = (state = inittialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action);
            // let itemAdd = find(state, function(item) { return item.product.id === action.product.id});
            // if(itemAdd) {
            //     itemAdd.product.quantity++;
            // }
            return [...state];
        default: return [...state];
    }
}

export default cart;