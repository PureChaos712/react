import React, { useState } from 'react';
import updateStudent from '../api/UpdateStudent';

function ChangeStudent() {
  const [isChanged, setisChanged] = useState(false);
  const [studentId, setStudentId] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentSurname, setStudentSurname] = useState('');

  const handleChangeStudent = async () => {
    try {
      const isSuccess = await updateStudent(studentId, studentName, studentSurname);
      setisChanged(isSuccess);
    } catch (error) {
      console.error('An error occurred while creating the student:', error);
      setisChanged(false);
    }
  };

  const handleIdChange = (event) => {
    setStudentId(event.target.value);
  };

  const handleNameChange = (event) => {
    setStudentName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setStudentSurname(event.target.value);
  };

  return (
    <div>
      <h1>Zmodyfikuj dane studenta</h1>
        <label>Numer ID:</label>
        <input 
        type="number"
        id="studentId"
        value={studentId}
        onChange={handleIdChange}
        /><br />
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
      <button onClick={handleChangeStudent}>Zmień studenta</button>
      {isChanged && 
      <p>Student zmieniony</p>}
    </div>
  );
}

export default ChangeStudent;
