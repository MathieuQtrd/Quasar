import { useReducer, createContext } from 'react'
import { cartReducer, initialState } from '../reducer/cartReducer'

const CartContext = createContext()

export function CartProvider({children}) {

    const [state, dispatch] = useReducer(cartReducer, initialState)

    return (
        <CartContext.Provider value={{cart: state.cartCount, dispatch}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContext