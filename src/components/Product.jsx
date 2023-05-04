import React from 'react'
import { FaTimes } from 'react-icons/fa';

const Product = ({ name, price, imageUrl, description,onDelete}) => {
  return (
    <div>
      <div className="product-container">
        <div className="card">
          <button className="deleteButton" onClick={onDelete}>
            <FaTimes />
          </button>
          <img src={imageUrl} alt={name} className="image" />
          <div className="details">
            <h2 className="name">{name}</h2>
            <p className="price">&#8377;{price}</p>
            <p className="description">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product

