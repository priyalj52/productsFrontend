import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import UpdateProduct from './Update';

const Product = ({ id, name, price, imageUrl, description, onDelete, onUpdate }) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const handleUpdateClick = () => {
    setShowUpdateForm(true);
  }

  return (
    <div>
      <div className="product-container">
        <div className="card">
          <button className="deleteButton" onClick={() => onDelete(id)}>
            <FaTimes />
          </button>
          <button className="updateButton" onClick={handleUpdateClick}>
            Edit
          </button>
          <img src={ `http://localhost:8080/${imageUrl}`} alt={name} className="image" />
          <div className="details">
            <h2 className="name">{name}</h2>
            <p className="price">&#8377;{price}</p>
            <p className="description">{description}</p>
          </div>
        </div>
        {showUpdateForm && (
          <UpdateProduct 
            id={id} 
            name={name} 
            price={price} 
            description={description} 
            imageUrl={imageUrl} 
           
          />
        )}
      </div>
    </div>
  )
}

export default Product;
