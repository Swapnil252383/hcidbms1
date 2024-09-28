import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });
    // Add your authentication logic here
  };

  return (
    <div className="login-container">
      <div className="login-info">
        <h1>Welcome Back!</h1>
        <p>Login to your account to access our learning materials, track your progress, and more.</p>
        <p>If you don't have an account, please contact your administrator for assistance.</p>
      </div>

      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        
        <div className="forgot-password">
          <a href="#">Forgot your password?</a>
        </div>
        
        <div className="signup-option">
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p> {/* Link to Sign Up */}
        </div>
      </div>
    </div>
  );
}

export default Login;
