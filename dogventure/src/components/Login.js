import { useState } from "react";
import "./Login.css";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((preValues) => ({
      ...preValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);

    fetch("http://localhost:8080/api/basic/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("Authorization", res.access_token);
      });
  };

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <h2>로그인</h2>
      <ul>
        <li>
          <input
            placeholder="아이디"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </li>
        <li>
          <input
            placeholder="비밀번호"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </li>
        <li>
          <button type="submit">로그인</button>
        </li>
      </ul>
    </form>
  );
}

export default Login;
