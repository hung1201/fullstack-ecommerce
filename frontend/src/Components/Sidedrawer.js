import {useSelector} from 'react-redux'
import './Sidedrawer.css'
import {Link} from 'react-router-dom'
const Sidedrawer = ({show,click}) => {
    
const cart = useSelector(state =>state.cart)
    const {cartItems} = cart
    const getCartCounter = () => {
        return cartItems.reduce((qty,item)=> Number(item.qty)+qty,0)
    }
    const sideDrawerClasses = ["sidedrawer"]
        if(show){
            sideDrawerClasses.push("show")}
         return (
            <div className={sideDrawerClasses.join(" ")}>
                <ul className="sidedrawer__links" onClick = {click}>
                    <li>
                    <Link to="/cart" className="sidedrawer__link">
                            <i className="fas fa-shopping-cart"></i>
                            <span>
                                Cart
                            <span className="sidedrawer__icon">{getCartCounter()}</span>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Shop
                        </Link>
                    </li>
                    
                </ul>
            </div>
        )   
}

export default Sidedrawer;