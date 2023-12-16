import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './CartItem.css'

const CartItem = ({ id, name, price, quantity, img }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="CartItem">
      <div>
      
        <section>
          <img src={img} alt={name} className="ItemImg" />
          <h4>{name}</h4>
          <p>Precio: ${price}</p>
          <p>Cantidad: {quantity}</p>
        </section>
      </div>
      <button onClick={() => removeItem(id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
