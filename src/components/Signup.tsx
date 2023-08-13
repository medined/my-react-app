import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signup } from '../services/auth';
import '../styles/Signup.ts';

const Signup: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(email, password);
      history.push('/');
    } catch (error) {
      setError('Error signing up. Try again.');
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;