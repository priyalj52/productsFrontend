import React, { useState } from 'react';

const UpdateProduct = ({ id, name, price, description, imageUrl, }) => {
  const [productName, setProductName] = useState(name);
  const [productPrice, setProductPrice] = useState(price);
  const [productDescription, setProductDescription] = useState(description);
  const [productImageUrl, setProductImageUrl] = useState(imageUrl);
  


const handleUpdate = async (id) => {
  
    const   updatedProduct=new FormData()
    updatedProduct.append('_id', id);
    updatedProduct.append('name', productName);
    updatedProduct.append('price', productPrice);
    updatedProduct.append('description', productDescription);
    updatedProduct.append('imageUrl', productImageUrl);
    try {
      const response = await fetch(`http://localhost:8080/api/products/${id}`, {
        method: 'PUT',
       
        body: updatedProduct
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const updatedProductData = await response.json();
    //   console.log(updatedProductData)
      window.location.reload()
    //   onUpdate(updatedProductData);
    } catch (error) {
      console.error(error);
    }
  }

  
  return (
    <div className="update-product">
      <h3>Update Product</h3>
      <div>
        <label htmlFor="productName">Name: </label>
        <input type="text" id="productName" value={productName} onChange={(e) => setProductName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="productPrice">Price: </label>
        <input type="number" id="productPrice" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
      </div>
      <div>
        <label htmlFor="productDescription">Description: </label>
        <textarea id="productDescription" value={productDescription} onChange={(e) => setProductDescription(e.target.value)}></textarea>
      </div>
      <div>
        <label htmlFor="productImageUrl">Image URL: </label>
        <input type="file" id="productImageUrl"  onChange={(e) => setProductImageUrl(e.target.files[0])} />
      </div>
      <button onClick={()=>{handleUpdate(id)}}>Update</button>
    </div>
  );
}

export default UpdateProduct;
