import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebaseConfig'; // Import your Firebase configuration
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        const userDoc = doc(db, 'users', auth.currentUser.uid);
        const docSnap = await getDoc(userDoc);
        if (docSnap.exists()) {
          setUser(docSnap.data());
          setName(docSnap.data().name);
          setEmail(docSnap.data().email);
        }
      }
    };

    fetchUserData();
  }, []);

  const handleUpdate = async () => {
    if (auth.currentUser) {
      const userDoc = doc(db, 'users', auth.currentUser.uid);
      await updateDoc(userDoc, {
        name,
        email
      });
      alert('Profile updated!');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="bg-white shadow-md rounded p-4 max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            type="text"
            className="border border-gray-300 rounded p-2 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="border border-gray-300 rounded p-2 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          onClick={handleUpdate}
          className="bg-blue-600 text-white rounded p-2 w-full"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;