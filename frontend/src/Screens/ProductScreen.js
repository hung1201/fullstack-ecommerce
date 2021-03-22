
import './ProductScreen.css'
import { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getProductDetail} from '../redux/action/productsAction'
import { addToCart} from '../redux/action/cartAction'
const ProductScreen = ({match,history}) => {
    const [qty,setQty] = useState(1)
    const dispatch = useDispatch()
    const productDetails = useSelector(state=> state.getProductDetails)
    const {loading,error,product} = productDetails
    useEffect(()=>{
        if(product && match.params.id !== product._id){
            dispatch(getProductDetail(match.params.id))
        }
    },[dispatch,product,match])
    const addToCartHandler = () => {
        dispatch(addToCart(product._id,qty))
        history.push("/cart")
    }
    return (
        <div className="productscreen">
            {loading ? <h2>loading...</h2> : error ? <h2>{error}</h2> :(
                <>
                <div className="productscreen__left">
                <div className="left__img">
                    <img src={product.imageUrl} alt={product.imageUrl}  />
                </div>
                <div className="left__info">
                    <p className="left__name">{product.name}</p>
                    <p className="left__price">${product.price}</p>
                    <p className="left__desc">{product.description}</p>
                </div>
            </div>
            <div className="productscreen__right">
                <div className="right__info">
                    <p>
                        Price: <span>${product.price}</span>
                    </p>
                    <p>
                        Status:{" "} 
                        <span>
                            {product.countInStock > 0 ? "In Stock": "Out of Sotck"}
                        </span>
                    </p>
                    <p>
                        Qty
                        <select value ={qty} onChange={(e)=>setQty(e.target.value)}>
                            {[...Array(product.countInStock).keys()].map((x,key)=>(
                                <option key={key} value={x+1}>
                                    {x+1}
                                </option>
                            ))}
                        </select>
                    </p>
                    <p>
                        <button type="button"
                            onClick = {addToCartHandler}
                        >Add to cart</button>
                    </p>
                </div>
            </div>
        
                </>
            )}
            </div>
    );
}

export default ProductScreen;