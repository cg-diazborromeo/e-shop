import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartItemCounter from "./CartItemCounter";

const CartElements = () => {
  const { cart } = useContext(dataContext);

  return cart.map((product) => {
    return (
      <div className="cart-content" key={product.id}>
        <img src={product.img} alt="game-art" />
        <h3 className="name">{product.name}</h3>
        <CartItemCounter product={product} />
        <h4 className="price">${product.price * product.quantity}</h4>
      </div>
    );
  });
};

export default CartElements;
