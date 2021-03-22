import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Product.css'
class Product extends Component {
    render() {
        return (
            <div className="product">
                <img src={this.props.imgUrl} alt="alo alo"/>
                <div className="product__info">
                    <p className="info__name">{this.props.name}</p>
                    <p className="info__desc">
                       {this.props.desc}
                    </p>
                    <p className="info__price">{this.props.price}</p>
                    <Link to={`/products/${this.props.id}`} className="info__btn">
                        View
                    </Link>
                </div>
            </div>
        );
    }
}

export default Product;