import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartTotal = () => {
  const { cart } = useContext(dataContext);
  const total = cart.reduce((acc, elem) => acc + elem.price * elem.quantity, 0);

  return (
    <div className="cart-total">
      <h3>Total a pagar: ${total}</h3>
    </div>
  );
};

export default CartTotal;
