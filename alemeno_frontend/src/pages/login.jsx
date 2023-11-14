import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../CSS/login.module.css";
import { authAction } from "../stores/auth/auth.actions";

const Login = () => {
  const navigate = useNavigate();
  const Auth = useSelector((store) => store.auth.data.isAuthenticated);

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authAction(formData));
  };

  useEffect(() => {
    if (Auth) {
      navigate("/");
    }
  }, [Auth, navigate]);

  return (
    <div className={styles.loginForm}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={formData.email}
          data-cy="login-email"
          placeholder="Email"
        />
        <br />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          value={formData.password}
          data-cy="login-password"
          placeholder="Password"
        />
        <br />
        <button data-cy="login-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
