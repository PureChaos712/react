import React, { useState } from 'react';
import createStudent from '../api/CreateStudent';

function AddStudent() {
  const [isAdded, setIsAdded] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [studentSurname, setStudentSurname] = useState('');

  const handleCreateStudent = async () => {
    try {
      const isSuccess = await createStudent(studentName, studentSurname);
      setIsAdded(isSuccess);
    } catch (error) {
      console.error('An error occurred while creating the student:', error);
      setIsAdded(false);
    }
  };

  const handleNameChange = (event) => {
    setStudentName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setStudentSurname(event.target.value);
  };

  return (
    <div>
      <h1>Studenci</h1>
        <label>Imię:</label>
        <input
          type="text"
          id="studentName"
          value={studentName}
          onChange={handleNameChange}
        /><br />
        <label>Nazwisko:</label>
        <input
          type="text"
          id="studentSurname"
          value={studentSurname}
          onChange={handleSurnameChange}
        /><br />
      <button onClick={handleCreateStudent}>Dodaj studenta</button>
      {isAdded && 
      <p>Student stworzony</p>}
    </div>
  );
}

export default AddStudent;
