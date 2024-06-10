import { useEffect, useRef, useState } from "react";
import "./LoginPage.css";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setEmail, setfullName, setId } from "../../redux/tokenSlice";
import { Link, useLocation } from "react-router-dom";

export default function LoginPage() {
  const [formValue, setFormValue] = useState({ email: "", password: "" });

  const token = useSelector((state) => state.token.token);
  const fullName = useSelector((state) => state.token.fullName);

  const dispatch = useDispatch();

  const { pathname } = useLocation();

  // const result = useRef()
  const result = document.getElementById('result')

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleAutorisation = async () => {
    if(!formValue.email || !formValue.password) {
      return
    }

    const res = await fetch("https://78e49fb1217fe058.mokky.dev/auth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formValue.email,
        password: formValue.password,
      }),
    });

    if (res.ok) {
      const json = await res.json();
      localStorage.setItem("token", JSON.stringify(json.token));
      localStorage.setItem("fullName", json.data.fullName);
      localStorage.setItem("email", json.data.email);
      localStorage.setItem("id", json.data.id);
      dispatch(setToken(json.token));
      dispatch(setfullName(json.data.fullName));
      dispatch(setEmail(json.data.email));
      dispatch(setId(json.data.id))
      result.innerText = 'Success!'
      setFormValue({...formValue, email: '', password: ''})
      // formValue.password = ''
      // jsonPre.innerText = JSON.stringify(json, null, 2);
    } else {
      result.innerText = 'Wrong email or password!'
      setFormValue({...formValue, email: '', password: ''})
      // setFormValue({...formValue, password: ''})
    }
  };

  const handleEmailChange = (e) => {
    setFormValue({ ...formValue, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setFormValue({ ...formValue, password: e.target.value });
  };

  return (
    <div className="loginPage">
      <div className="loginPage__header">
        <Link to={"/register"}>
          <span>Register if you're a new user</span>
        </Link>
      </div>
      <div className="loginPage__container">
        <h1>LOG IN</h1>
        <form onSubmit={handleSubmit} className="loginPage__input">
          <h2>Email</h2>
          <input
            value={formValue.email}
            onChange={handleEmailChange}
            type="text"
          />
          <h2>Password</h2>
          <input
            value={formValue.password}
            onChange={handlePasswordChange}
            type="password"
          />
          <h2 id="result"> </h2>
          <div className="loginPage__button">
            <Button onClick={handleAutorisation} disabled={formValue.email && formValue.password ? false: true}>logIn</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
