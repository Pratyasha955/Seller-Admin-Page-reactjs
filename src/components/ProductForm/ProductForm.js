import React, { useState } from 'react';
import './ProductForm.css';

const ProductForm = ({ onSubmit }) => {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleProductIdChange = (e) => {
    setProductId(e.target.value);
  };

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ productId, productName, productPrice, category });
    setProductId('');
    setProductName('');
    setProductPrice('');
    setCategory('');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label className="form-label">
        Product ID:
        <input type="text" className="form-input" value={productId} onChange={handleProductIdChange} />
      </label>
      <br />
      <label className="form-label">
        Product Name:
        <input type="text" className="form-input" value={productName} onChange={handleProductNameChange} />
      </label>
      <br />
      <label className="form-label">
        Product Price:
        <input type="number" className="form-input" value={productPrice} onChange={handleProductPriceChange} />
      </label>
      <br />
      <label className="form-label">
        Category:
        <select className="form-select" value={category} onChange={handleCategoryChange}>
          <option value="">Select a category</option>
          <option value="electronics">Electronics</option>
          <option value="skincare">Skincare</option>
          <option value="food">Food</option>
        </select>
      </label>
      <br />
      <button className="form-button" type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
