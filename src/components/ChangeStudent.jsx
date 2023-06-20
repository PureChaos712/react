import React, { useState } from 'react';
import updateStudent from '../api/UpdateStudent';

function ChangeStudent({ BACKEND_URL }) {
  const [isChanged, setisChanged] = useState(false);
  const [studentId, setStudentId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleChangeStudent = async () => {
    try {
      const isSuccess = await updateStudent(BACKEND_URL, studentId, firstName, lastName);
      setisChanged(isSuccess);
    } catch (error) {
      console.error('Pojawił się błąd podczas tworzenia studenta: ', error);
      setisChanged(false);
    }
  };

  const handleIdChange = (event) => {
    setStudentId(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
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
        <label>Nowe imię:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        /><br />
        <label>Nowe nazwisko:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleLastNameChange}
        /><br />
      <button onClick={handleChangeStudent}>Zatwierdź zmiany</button>
      {isChanged && 
      <p>Student zmieniony</p>}
    </div>
  );
}

export default ChangeStudent;
