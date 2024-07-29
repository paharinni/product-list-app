import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './productsSlice';
import './AddProductModal.css'; // Create a CSS file for basic styling

const AddProductModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [productDetails, setProductDetails] = useState({
    imageUrl: '',
    name: '',
    count: '',
    width: '',
    height: '',
    weight: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      productDetails.imageUrl &&
      productDetails.name &&
      productDetails.count &&
      productDetails.width &&
      productDetails.height &&
      productDetails.weight
    ) {
      dispatch(addProduct({
        ...productDetails,
        id: Date.now(),
        count: parseInt(productDetails.count, 10),
        size: {
          width: parseInt(productDetails.width, 10),
          height: parseInt(productDetails.height, 10),
        },
        weight: productDetails.weight,
        comments: [],
      }));
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Image URL:
            <input
              type="text"
              name="imageUrl"
              value={productDetails.imageUrl}
              onChange={handleInputChange}
              required
            />
          </label>
          <br/>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={productDetails.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <br/>
          <label>
            Count:
            <input
              type="number"
              name="count"
              value={productDetails.count}
              onChange={handleInputChange}
              required
            />
          </label>
          <br/>
          <label>
            Width:
            <input
              type="number"
              name="width"
              value={productDetails.width}
              onChange={handleInputChange}
              required
            />
          </label>
          <br/>
          <label>
            Height:
            <input
              type="number"
              name="height"
              value={productDetails.height}
              onChange={handleInputChange}
              required
            />
          </label>
          <br/>
          <label>
            Weight:
            <input
              type="text"
              name="weight"
              value={productDetails.weight}
              onChange={handleInputChange}
              required
            />
          </label>
          <div className="modal-buttons">
            <button type="submit">Add</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
