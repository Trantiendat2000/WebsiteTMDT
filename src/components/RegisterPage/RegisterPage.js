import { useState } from "react";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
import classes from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  SaveFormLocalStorage,
  setFormLocalstorage,
} from "../../LocalStorage/localStore";
import { validateActions } from "../../store/validateSlice";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isFullName, setIsFullName] = useState(null);
  const [isEmail, setIsEmail] = useState(null);
  const [isPassword, setIsPassword] = useState(null);
  const [isActiveUser, setIsActiveUser] = useState(false);

  const { userName, enteredEmail, EnteredPhoneNumber, enteredPassword } =
    useSelector((state) => state.validate);

  const arrUser = SaveFormLocalStorage("arrUser");
  console.log(arrUser);

  const handleSumit = () => {
    enteredPassword.length < 8 ? setIsPassword(true) : setIsPassword(false);
    userName.trim() === "" ? setIsFullName(true) : setIsFullName(false);
    enteredEmail.includes("@") ? setIsEmail(false) : setIsEmail(true);

    if (arrUser !== null) {
      const arr = arrUser.find((item) => item.email === enteredEmail);
      const isArr = !!arr;
      console.log(arr);
      if (isArr === true) {
        console.log(arr.email);
        arr.email === enteredEmail
          ? setIsActiveUser(true)
          : setIsActiveUser(false);
      } else {
        setIsActiveUser(false);
      }
    }

    if (
      isEmail === false &&
      isEmail === false &&
      isPassword === false &&
      isActiveUser === false
    ) {
      let arrUser = localStorage.getItem("arrUser")
        ? SaveFormLocalStorage("arrUser")
        : [];
      arrUser.push({
        fullName: userName,
        email: enteredEmail,
        Password: enteredPassword,
        phone: EnteredPhoneNumber,
      });

      setFormLocalstorage("arrUser", arrUser);
      SaveFormLocalStorage("arrUser");
      dispatch(validateActions.enteredEmail(""));
      dispatch(validateActions.enteredUserName(""));
      dispatch(validateActions.enteredPassword(""));
      navigate("/login", { replace: true });
    }
  };

  return (
    <div>
      <Navbar />
      <div className={classes.register}>
        <img src={require("../HomePage/images/banner1.jpg")} alt="smart" />
      </div>
      <div className={classes.formReg}>
        <h2>Sign up</h2>
        <div>
          <input
            value={userName}
            onChange={(e) => {
              userName.trim() === ""
                ? setIsFullName(true)
                : setIsFullName(false);
              dispatch(validateActions.enteredUserName(e.target.value));
            }}
            type="text"
            placeholder="Full Name"
          />
          {isFullName && (
            <p className="text-danger">Trường này không để trống </p>
          )}
        </div>
        <div>
          <input
            value={enteredEmail}
            onChange={(e) => {
              enteredEmail.includes("@") ? setIsEmail(false) : setIsEmail(true);
              dispatch(validateActions.enteredEmail(e.target.value));
            }}
            type="text"
            placeholder="Email"
          />

          {isEmail && <p className="text-danger">Invalid</p>}
          {!isEmail && isActiveUser && (
            <p className="text-danger">Tài khoản này đã có người đăng kí</p>
          )}
        </div>
        <div>
          <input
            value={enteredPassword}
            onChange={(e) => {
              enteredPassword.length < 8
                ? setIsPassword(true)
                : setIsPassword(false);
              dispatch(validateActions.enteredPassword(e.target.value));
            }}
            type="text"
            placeholder="Password"
          />
          {isPassword && (
            <p className="text-danger">Mật khẩu phải lớn hơn 8 kí tự</p>
          )}
        </div>
        <div>
          <input
            value={EnteredPhoneNumber}
            onChange={(e) =>
              dispatch(validateActions.EnteredPhoneNumber(e.target.value))
            }
            type="number"
            placeholder="Phone"
          />
        </div>
        <button onClick={handleSumit}>Sign up</button>
        <div>
          <span>Login? </span>
          <Link to={"/login"}>Click</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
