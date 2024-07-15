import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../Context/UserContext';
import '../../assets/css/login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {isLoged, setIsLoged} = useContext(UserContext);
  const navigate = useNavigate();

  const users = [
    { username: 'CristianO', password: 'Cristian_10564' },
    { username: 'LAlfaro', password: 'Automat@10564' },
    { username: '1', password: '1' }
  ];

  const handleLogin = () => {
    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );
    if (foundUser) {
      setIsLoged(true);
      navigate("/home");
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-card">
          <div className="login-logo"></div>
          <div className="input-group">
            <input
              className="input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="remember-me">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>
          <p className="forgot-password">Forgot password?</p>
        </div>
      </div>
    </>
  );
}

export default Login;
