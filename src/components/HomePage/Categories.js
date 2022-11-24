import classes from "./Categories.module.css";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/shop");
  };

  return (
    <div className={classes.category}>
      <div className={classes.title}>
        <p>CAREFULLY CREATED COLLECTIONS</p>
        <h2>BROWSE OUR CATEGORIES</h2>
      </div>
      <div className="row">
        <img
          src={require("./images/product_1.png")}
          alt="iphone"
          className="col-12 col-lg-6"
          onClick={navigateHandler}
        />
        <img
          src={require("./images/product_2.png")}
          alt="macbook"
          className="col-12 col-lg-6"
          onClick={navigateHandler}
        />
      </div>
      <div className="row mt-4">
        <img
          src={require("./images/product_3.png")}
          alt="ipad"
          className="col-12 col-lg-4"
          onClick={navigateHandler}
        />
        <img
          src={require("./images/product_4.png")}
          alt="watch"
          className="col-12 col-lg-4"
          onClick={navigateHandler}
        />
        <img
          src={require("./images/product_5.png")}
          alt="airpods"
          className="col-12 col-lg-4"
          onClick={navigateHandler}
        />
      </div>
    </div>
  );
};

export default Categories;
