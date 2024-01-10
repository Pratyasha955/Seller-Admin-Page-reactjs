import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList/ProductList';
import ProductForm from './components/ProductForm/ProductForm';
function App() {
    const [products, setProducts] = useState({});

    const fetchProductsFromLocalStorage = () => {
        const storedProducts = {};
        Object.keys(localStorage).forEach((key) => {
            if (key !== 'products') {
                storedProducts[key] = JSON.parse(localStorage.getItem(key));
            }
        });
        return storedProducts;
    };

    useEffect(() => {
        const storedProducts = fetchProductsFromLocalStorage();
        setProducts(storedProducts);
    }, []);

    const handleSubmit = (data) => {
        const { productId, category } = data;
        const updatedProducts = {
            ...products,
            [productId]: { ...data, category: category },
        };
        setProducts(updatedProducts);

        localStorage.setItem(productId, JSON.stringify({ ...data, category: category }));
    };

    const handleDelete = (productId) => {
        const updatedProducts = { ...products };
        delete updatedProducts[productId];

        setProducts(updatedProducts);
        localStorage.removeItem(productId);
    };

    return (
        <div className="App">
            <ProductForm onSubmit={handleSubmit} />
            <ProductList products={products} onDelete={handleDelete} />
        </div>
    );
}

export default App;
