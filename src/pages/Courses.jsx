import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig'; // Your Firebase config
import { collection, getDocs } from 'firebase/firestore';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const querySnapshot = await getDocs(collection(db, 'users', 'USER_ID', 'courses'));
      setCourses(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map(course => (
          <div key={course.id} className="bg-white shadow-md rounded p-4">
            <h2 className="text-lg font-semibold">{course.title}</h2>
            <p>Source: {course.source}</p>
            <p>Progress: {course.progress}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;