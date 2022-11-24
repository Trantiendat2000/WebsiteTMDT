import classes from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import CartIcon from "./Icon/CartIcon";
import LogInIcon from "./Icon/LoginIon";
import { useDispatch, useSelector } from "react-redux";
import {
  SaveFormLocalStorage,
  setFormLocalstorage,
} from "../../LocalStorage/localStore";
import { validateActions } from "../../store/validateSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = SaveFormLocalStorage("arrActive");

  if (!!data === true) {
    dispatch(validateActions.OnLogin(!!data));
  } else {
    dispatch(validateActions.LogOut(false));
  }

  const { isSign } = useSelector((state) => state.validate);

  SaveFormLocalStorage("arrActive");

  console.log(isSign);

  const handleLogout = () => {
    setFormLocalstorage("arrActive", null);
    dispatch(validateActions.LogOut(false));
  };

  return (
    <div className={classes.container}>
      <div className={classes.navbar}>
        <div>
          <h3
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </h3>
          <h3
            onClick={() => {
              navigate("/shop");
            }}
          >
            Shop
          </h3>
        </div>
        <div className={classes.icon}>
          <h3
            onClick={() => {
              navigate("/");
            }}
          >
            <CartIcon /> Cart
          </h3>
          {isSign && <h3>{data.fullName}</h3>}
          {!isSign ? (
            <Link to={"/login"}>
              <h3>
                <LogInIcon /> Login
              </h3>
            </Link>
          ) : (
            <Link to={"/"} onClick={handleLogout}>
              <h3>Logout</h3>
            </Link>
          )}
        </div>
      </div>
      <h1 className={classes.title}>BOUTIQUE</h1>
    </div>
  );
};

export default Navbar;
