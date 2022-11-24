import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner";
import Categories from "./Categories";
import ProductList from "./ProductList";
import Form from "./Form";

const HomePage = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <Categories />
      <ProductList productList={props.productList} />
      <Form />
      <Footer />
    </React.Fragment>
  );
};
export default HomePage;
