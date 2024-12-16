import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../Context/AuthProvider";
import axiosInstance from "../api/axios";

const loginLink = "/auth";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errorRef = useRef();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setError("");
  }, [user, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post(
        loginLink,
        JSON.stringify({ user, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, password, accessToken });
      setUser("");
      setPassword("");
      setSuccess(true);
    } catch (error) {
      console.error(error);

      errorRef.current.focus();
    }
  };

  return (
    <>
      <section className="login">
        <p ref={errorRef} aria-live="assertive">
          {error}
        </p>
        <h1 className="log-title">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <button className="log-submit">Log in</button>
        </form>
        <p>
          <span className="line">
            <a href="#">Sign Up</a>
          </span>
        </p>
      </section>
    </>
  );
};

export default Login;
