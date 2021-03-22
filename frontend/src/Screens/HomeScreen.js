import Product from '../Components/Product'
import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import './HomeScreen.css'
import {getProducts as listProducts} from '../redux/action/productsAction'

const HomeScreen = () => {
    const dispatch = useDispatch();
const getProducts = useSelector( state => state.getProducts)
const { products,loading,error } = getProducts
useEffect(()=>{
    dispatch(listProducts())
},[dispatch])
return (
    <div className="homescreen">
        <h2 className="homescreen__title">Lastest Products</h2>
        <div className="homescreen__products">
            { loading ? <h2>loading...</h2> : error ? <h2>{error}</h2> : products.map((product,key) => <Product
                key={key}
                id = {product._id}
                imgUrl = {product.imageUrl}
                name= {product.name}
                desc= {product.description}
                price={product.price}
            />)}
           
        </div>
    </div>
);
}

export default HomeScreen;