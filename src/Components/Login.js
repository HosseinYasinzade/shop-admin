import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../Context/AuthProvider";
import { loginUser } from "../api/axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const userRef = useRef();
  const errorRef = useRef();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setError("");
  }, [user, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !password) {
      setError("Username and password are required.");
      return;
    }

    try {
      const response = await loginUser(user, password);
      const token = response.token;

      if (response?.status === 200) {
        const accessToken = response?.data?.accessToken;
        setAuth({ user, password, accessToken });
        setUser("");
        setPassword("");
        navigate("/home");
      } else {
        throw new Error("Login failed. Please try again.");
      }
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
            placeholder="UserName - Email"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            placeholder="Password"
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
