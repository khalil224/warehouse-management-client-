import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h2 className='text-primary mb-5'>Our Products</h2>
            <div className='container'>
                <div className='products-Container '>
                    {
                        products.map(product => <Product product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;