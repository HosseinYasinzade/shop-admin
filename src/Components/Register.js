import { useState, useEffect, useRef } from "react";
import axios from "../api/axios";

const userRegex = /^[A-z][A-z0-9-_]{3,23}$/;
const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const registerLink = "/register";

const Register = () => {
  const userRef = useRef();
  const errorRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPass, setValidPass] = useState(false);
  const [passFocus, setPassFocus] = useState(false);

  const [matchPass, setMatchPass] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setValidName(userRegex.test(user));
  }, [user]);

  useEffect(() => {
    setValidPass(passRegex.test(password));
    setValidMatch(matchPass === password);
  }, [password, matchPass]);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setError("");
  }, [user, password, matchPass]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validateUser = userRegex.test(user);
    const validatePass = passRegex.test(password);

    if (!validateUser || !validPass) {
      setError("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        registerLink,
        JSON.stringify({ user, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setUser("");
      setPassword("");
      setMatchPass("");
      setSuccess(true);
    } catch (error) {
      setError("Field");
      errorRef.current.focus();
    }
  };

  return (
    <>
      <div className="register">
        <p
          ref={errorRef}
          className={error ? "errorText" : "hide"}
          aria-live="assertive"
        >
          {error}
        </p>
        <h1 className="reg-title">Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            ref={userRef}
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />

          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            onFocus={() => setPassFocus(true)}
            onBlur={() => setPassFocus(false)}
          />

          <input
            type="password"
            onChange={(e) => setMatchPass(e.target.value)}
            required
            value={matchPass}
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
          />

          <button
            disabled={!(validName || validPass || validMatch) ? true : false}
            className="reg-submit"
          >
            sign up
          </button>
        </form>
        <p>
          you have already account?
          <br />
          <span>
            <a href="#">Sign in</a>
          </span>
        </p>
      </div>
    </>
  );
};

export default Register;
