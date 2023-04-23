import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="products-cards-container">
        <Products />
      </div>
    </>
  );
};

export default Home;
