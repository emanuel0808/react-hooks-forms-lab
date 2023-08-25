import React from "react";

const Item = ({ name, category }) => {
  return (
    <div>
      <span>{name} - {category}</span>
    </div>
  );
};

export default Item;
