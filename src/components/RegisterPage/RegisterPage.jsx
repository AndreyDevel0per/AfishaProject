import "./RegisterPage.css";
import { useState } from "react";
import Button from "../Button/Button";

export default function RegisterPage() {
  const [formValue, setFormValue] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formValue);
  };

  const handleRegistration = async () => {
    const res = await fetch("https://78e49fb1217fe058.mokky.dev/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: formValue.fullName,
        email: formValue.email,
        password: formValue.password,
      }),
    });
    if (res.ok) {
      const json = await res.json();
      console.log(json);
      // jsonPre.innerText = JSON.stringify(json, null, 2);
    }
  };

  const handleFullNameChange = (e) => {
    setFormValue({ ...formValue, fullName: e.target.value });
  };

  const handleEmailChange = (e) => {
    setFormValue({ ...formValue, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setFormValue({ ...formValue, password: e.target.value });
  };

  return (
    <div className="registerPage">
      <div className="registerPage__container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit} className="registerPage__input">
          <h2>Name</h2>
          <input
            value={formValue.fullName}
            onChange={handleFullNameChange}
            type="text"
          />
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
          {/* <button type='submit'>Submit</button> */}
          <div className="registerPage__button">
            <Button onClick={handleRegistration}>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
