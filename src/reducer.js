export const initialState = {
    basket: [],
    user: null,
};

    export const getBasketTotal = (basket) =>
    basket?.reduce((amount,item) => item.price + amount,0);

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user,
            }
        case 'ADD_TO_BASKET':
            //Add to basket    
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
            break;

        case 'REMOVE_FROM_BASKET':
            //Logic to remove from the basket

            //We cloned the basket 
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            
            if (index >= 0) {
                // Remove item from the basket
                newBasket.splice(index, 1);

            } else {
                console.warn(
                    `can't remove product (id: ${action.id} as it is no longer available in the baset`
                );
            }

            return {
                ...state,
                basket: newBasket,
            };
        default:
            return state;
    }
};
export default reducer;