import { useContext, useState, useEffect } from "react";
import { dataContext } from "../Context/DataContext";
import axios from "axios";
import "./Products.css";

const Products = () => {
  const [data, setData] = useState([]);
  const { buyProducts } = useContext(dataContext);

  useEffect(() => {
    axios("data.json").then((response) => setData(response.data));
  }, []);

  return data.map((product) => {
    return (
      <div className="card" key={product.id}>
        <img src={product.img} alt="game-art" />
        <h3>{product.name}</h3>
        <h4>${product.price}</h4>
        <button onClick={() => buyProducts(product)}>Buy</button>
      </div>
    );
  });
};

export default Products;
