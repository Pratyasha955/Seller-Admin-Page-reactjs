import React from 'react';
import './ProductList.css';

const ProductList = ({ products, onDelete }) => {
    const getProductsForCategory = (category) => {
        return Object.keys(products)
            .filter((productId) => products[productId].category === category)
            .map((productId, index) => (
                <li className="order-item" key={index}>
                    <div>
                        <span className="order-info">
                            {products[productId].productName}
                        </span>
                        <span className="order-info">
                            {products[productId].productPrice}
                        </span>
                    </div>
                    <button className="order-item-button" onClick={() => onDelete(productId)}>
                        Delete
                    </button>
                </li>
            ));
    };

    return (
        <div className="container">
            <h2>Products</h2>
            <div className="table-section">
                <h3 className="table-header">Electronics</h3>
                <ul className="order-list">
                    {getProductsForCategory('electronics')}
                </ul>
            </div>
            <div className="table-section">
                <h3 className="table-header">Skincare</h3>
                <ul className="order-list">
                    {getProductsForCategory('skincare')}
                </ul>
            </div>
            <div className="table-section">
                <h3 className="table-header">Food</h3>
                <ul className="order-list">
                    {getProductsForCategory('food')}
                </ul>
            </div>
        </div>
    );
};

export default ProductList;
