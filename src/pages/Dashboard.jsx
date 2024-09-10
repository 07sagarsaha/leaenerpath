import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-lg font-semibold">Daily Progress</h2>
          <p>Complete 2 videos</p>
        </div>
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-lg font-semibold">Weekly Goals</h2>
          <p>Finish 1 course</p>
        </div>
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-lg font-semibold">Reminders</h2>
          <p>Complete the React course by Friday</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;