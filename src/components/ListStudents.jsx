import React, { useState } from 'react';

function ListStudents() {
  const [students, setStudents] = useState({});

  const fetchStudents = async () => {
    const response = await fetch('http://localhost:8000/students/');
    const data = await response.json();
    setStudents(data);
  };

  const handleShowStudents = () => {
    fetchStudents();
  };

  return (
    <div>
      <button onClick={handleShowStudents}>Show Students</button>
      {Object.keys(students).length > 0 && (
        <ol>
          {Object.entries(students).map(([studentId, student]) => (
            <li key={studentId}>
              {student.first_name} {student.last_name}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default ListStudents;
