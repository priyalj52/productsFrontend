import React, { useState } from 'react';
import "../index.css"

const Navbar = ({  }) => {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddClick = async(event) => {
    event.preventDefault();
    const productName = event.target.elements.productName.value;
    const productPrice = event.target.elements.productPrice.value;
    const productDescription = event.target.elements.productDescription.value;
    const productImageUrl = event.target.elements.productImageUrl.files[0];
   
   
    const   Product=new FormData()
    
    Product.append('name', productName);
    Product.append('price', productPrice);
    Product.append('description', productDescription);
    Product.append('imageUrl', productImageUrl);
    // console.log(Product)
    try {
      const response = await fetch(`http://localhost:8080/api/products`, {
        method: 'POST',
       
        body: Product
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const ProductData = await response.json();
    
      window.location.reload()
    //   onUpdate(updatedProductData);
    } catch (error) {
      console.error(error);
    }
  

    setShowAddForm(false);
  }

  return (
    <div>
      <div className="nav">
        Products 
      </div>
      <div className="nav">
        <button className='' onClick={() => setShowAddForm(!showAddForm)}>
          ADD
        </button>
      </div>
      {showAddForm && (
        <form className="add-form" onSubmit={handleAddClick}>
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="productName">Name:</label>
              <input type="text" id="productName" />
            </div>
            <div className="form-group">
              <label htmlFor="productPrice">Price:</label>
              <input type="number" id="productPrice" />
            </div>
            <div className="form-group">
              <label htmlFor="productDescription">Description:</label>
              <textarea id="productDescription"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="productImageUrl">Image URL:</label>
              <input type="file" id="productImageUrl" />
            </div>
            <div className="form-group">
              <button type="submit">Add Product</button>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}

export default Navbar;



