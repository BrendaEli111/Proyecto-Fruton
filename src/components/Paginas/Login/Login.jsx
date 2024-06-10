import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';


export default function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      setError('Please fill in all fields');
      return;
    }

    if (email === 'admin@admin.com' && password === 'password') {
      // Simulando un inicio de sesión 
      setError('');
      navigate('/');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h1>Inicio de Sesion</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};