import React, { useRef } from "react";

function Item({ name, category }) {
  const itemRef = useRef(null);

  const handleAddToCart = () => {
    if (itemRef.current) {
      itemRef.current.classList.add("in-cart");
    }
  };

  return (
    <li ref={itemRef} className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </li>
  );
}

export default Item;