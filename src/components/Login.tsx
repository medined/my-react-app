import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../services/auth';
import { User } from '../types/user';
import '../styles/Login.ts';

const Login: React.FC = () => {
  const history = useHistory();
  const [user, setUser] = useState<User>({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await login(user.email, user.password);
      history.push('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
          required
        />
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;