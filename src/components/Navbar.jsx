import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <div className="font-bold text-lg">LearnPath</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Dashboard
        </Link>
        <Link to="/courses" className="hover:underline">
          Courses
        </Link>
        <Link to="/goals" className="hover:underline">
          Goals
        </Link>
        <Link to="/profile" className="hover:underline">
          Profile
        </Link>
        <Link to="/auth" className="hover:underline">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;