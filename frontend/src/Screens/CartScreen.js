
import './CartScreen.css'
import CartItem from '../Components/CartItem'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {addToCart,removeFromCart} from '../redux/action/cartAction'
const CartScreen = () => {
    const dispatch = useDispatch()
    const cart = useSelector( state => state.cart)
    const {cartItems} = cart
    const qtyChangeHandler= (id,qty) => {
        dispatch(addToCart(id,qty))
    }
    const removeFromCartHandler = (id) =>{
        dispatch(removeFromCart(id))
    }
    const getCartCount = () => {
        return cartItems.reduce((qty,item)=>Number(item.qty)+qty,0)
    }
    const getCartPriceTotal = () =>{
        return cartItems.reduce((price,item)=> (item.price*item.qty)+price,0)
    }
    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Shopping Cart</h2>
                {cartItems.length ===0 ? (
                    <div>
                        Your cart is empty <Link to ="/"> Go back</Link>
                    </div>
                ):cartItems.map((item,key)=>(
                    <CartItem
                    item={item}
                    key={key}
                    qtyChangeHandler ={qtyChangeHandler}
                    removeFromCartHandler ={removeFromCartHandler}
                    />
                ))}
            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>${getCartPriceTotal().toFixed(2)}</p>
                </div>
                <div>
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    );
}


export default CartScreen;