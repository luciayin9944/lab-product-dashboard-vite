import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {

  const cardClass = product.inStock
    ? styles.productCard
    : `${styles.productCard} ${styles.outOfStock}`;

    
  return (
    <div className={cardClass}>
      {/* TODO: Apply conditional class to <div> above for out-of-stock items */}
      
      {/* TODO: Display product name */}

      {/* TODO: Display product price */}

      {/* TODO: Show if the product is in stock or out of stock */}
      <h2>{product.name}</h2>
      <h4>{product.price}</h4>
      <h4>{product.inStock===true ? "In Stock" : "Out of Stock"}</h4>
    </div>
  );
};

export default ProductCard;
