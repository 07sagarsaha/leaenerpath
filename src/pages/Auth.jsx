import React, { useState } from 'react';
import { auth } from '../firebaseConfig'; // Import your Firebase configuration
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      alert(`User ${isLogin ? 'logged in' : 'registered'} successfully!`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Register'}</h1>
      <div className="bg-white shadow-md rounded p-4 max-w-md mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="border border-gray-300 rounded p-2 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="border border-gray-300 rounded p-2 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white rounded p-2 w-full"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 mt-4 w-full"
          >
            {isLogin ? 'Create an Account' : 'Already have an account? Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;