import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
import classes from "./LoginPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  SaveFormLocalStorage,
  setFormLocalstorage,
} from "../../LocalStorage/localStore";
import { validateActions } from "../../store/validateSlice";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isEmail, setIsEmail] = useState(null);
  const [isPassword, setIsPassword] = useState(null);
  const { enteredEmail, enteredPassword } = useSelector(
    (state) => state.validate
  );

  const arr = SaveFormLocalStorage("arrUser");

  const handleActiveUser = () => {
    if (arr === null) {
      navigate("/register", { replace: true });
    }

    const arrActive = arr.find(
      (item) => item.email === enteredEmail && item.Password === enteredPassword
    );

    const arrActiveUser = arr.find((item) => item.email === enteredEmail);

    !!arrActiveUser ? setIsEmail(false) : setIsEmail(true);
    const arrActivePassword = arr.find(
      (item) => item.Password === enteredPassword
    );

    !!arrActivePassword === true ? setIsPassword(false) : setIsPassword(true);

    const isArr = !!arrActive;
    console.log(isArr);

    if (isArr === true) {
      setFormLocalstorage("arrActive", arrActive);
      dispatch(validateActions.OnLogin(true));
      navigate("/", { replace: true });
    }
  };

  return (
    <div className={classes.login}>
      <Navbar />
      <img src={require("../HomePage/images/banner1.jpg")} alt="model watch" />
      <div className={classes.formLogin}>
        <h2>Sign In</h2>
        <div>
          <input
            value={enteredEmail}
            onChange={(e) => {
              dispatch(validateActions.enteredEmail(e.target.value));
            }}
            type="text"
            placeholder="Email"
          />
          {isEmail && (
            <p className="text-danger">Tài khoản chưa được đăng kí</p>
          )}
        </div>
        <div>
          <input
            onChange={(e) => {
              dispatch(validateActions.enteredPassword(e.target.value));
            }}
            type="text"
            placeholder="Password"
          />
          {isPassword && (
            <p className="text-danger">
              Mật khẩu không đúng , vui lòng kiểm tra lại
            </p>
          )}
        </div>
        <div>
          <button onClick={handleActiveUser}>Sign In</button>
        </div>
        <div>
          <span>Login?</span>{" "}
          <span>
            <Link to={"/register"}>Sign In</Link>
          </span>
        </div>{" "}
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
