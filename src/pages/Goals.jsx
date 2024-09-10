import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebaseConfig'; // Import your Firebase configuration
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const Goals = () => {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState('');

  useEffect(() => {
    const fetchGoals = async () => {
      if (auth.currentUser) {
        const userDoc = doc(db, 'users', auth.currentUser.uid);
        const docSnap = await getDoc(userDoc);
        if (docSnap.exists()) {
          setGoals(docSnap.data().goals || []);
        }
      }
    };

    fetchGoals();
  }, []);

  const handleAddGoal = async () => {
    if (auth.currentUser) {
      const userDoc = doc(db, 'users', auth.currentUser.uid);
      const updatedGoals = [...goals, newGoal];
      await updateDoc(userDoc, {
        goals: updatedGoals
      });
      setGoals(updatedGoals);
      setNewGoal('');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Goals</h1>
      <div className="bg-white shadow-md rounded p-4 max-w-md mx-auto">
        <div className="mb-4">
          <input
            type="text"
            className="border border-gray-300 rounded p-2 w-full"
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
            placeholder="Add new goal"
          />
        </div>
        <button
          onClick={handleAddGoal}
          className="bg-blue-600 text-white rounded p-2 w-full"
        >
          Add Goal
        </button>
        <ul className="mt-4">
          {goals.map((goal, index) => (
            <li key={index} className="bg-gray-100 border border-gray-300 rounded p-2 mb-2">
              {goal}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Goals;