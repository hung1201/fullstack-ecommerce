
import {Link} from 'react-router-dom'
import './Navbar.css'
import {useSelector} from 'react-redux'
const Navbar = ({click}) => {
    const cart = useSelector(state =>state.cart)
    const {cartItems} = cart
    const getCartCounter = () => {
        return cartItems.reduce((qty,item)=> Number(item.qty)+qty,0)
    }
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <h2>E-Commerce</h2>
            </div>
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                        <span className="cartlogo__icon">{getCartCounter()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
            </ul>
            <div className="hamburger__menu" onClick ={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
}


export default Navbar;