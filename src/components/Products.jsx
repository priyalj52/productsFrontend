
import React, { useEffect, useState } from 'react'
import Product from './Product'
import defaultImage from "../images/im.png"

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8080/api/products/${id}`, {
      method: 'DELETE',
    });
    setProducts(products.filter(product => product._id !== id));
  };

  return (
    <div className='container'>
     
      {products.map(product => (
        <Product
          key={product._id}
          name={product.name}
          price={product.price}
          imageUrl={`http://localhost:8080/${product.imageUrl}`|| defaultImage}
          description={product.description}
          onDelete={() => handleDelete(product._id)}
        />
      ))}
    </div>
  );
};

export default Products;

