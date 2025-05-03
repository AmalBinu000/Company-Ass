const initialState = {
    cart : []
}

let nextId = 1

const cartReducer = (state = initialState ,action)=>{
    switch (action.type){
        case "ADD_ITEM":
            return{
                ...state,
                cart : [
                    ...state.cart,
                    {
                        id:nextId++,
                        name:action.payload.name,
                        price:action.payload.price,
                        quantity:1
                    }
                ]
            }
        case "DELETE_ITEM":
            return{
                ...state,
                cart :
                    state.cart.filter(item => item.id !== action.payload)
            }
        case "UPDATE_ITEM":
            return{
                ...state,
                cart : state.cart.map(item => item.id === action.payload ? {...item,quantity : action.payload.quantity} : item)
            }
        default :
            return state    
    }
}

export default cartReducer;