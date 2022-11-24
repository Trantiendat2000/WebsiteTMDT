import classes from "./Banner.module.css";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const img = require("./images/banner1.jpg");
  const navigate = useNavigate();

  return (
    <div className={classes.banner}>
      <img src={img} atl="model" width="100%" />
      <div className={classes.title}>
        <p>NEW INSPIRATION 2020</p>
        <h2>
          20% OFF ON NEW <br />
          SEASON
        </h2>
        <button
          onClick={() => {
            navigate("/shop");
          }}
        >
          Browse collections
        </button>
      </div>
    </div>
  );
};

export default Banner;
