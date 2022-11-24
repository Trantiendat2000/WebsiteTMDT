import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
import Banner from "./Banner";
import Categories from "./Categories";

const ShopPage = (props) => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Categories productList={props.productList} />
      <Footer />
    </div>
  );
};

export default ShopPage;
