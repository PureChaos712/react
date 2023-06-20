import React, { useState } from 'react';
import createStudent from '../api/CreateStudent';

function AddStudent({ BACKEND_URL }) {
  const [isAdded, setIsAdded] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleCreateStudent = async () => {
    try {
      const isSuccess = await createStudent(BACKEND_URL, firstName, lastName);
      setIsAdded(isSuccess);
    } catch (error) {
      console.error('Pojawił się błąd podczas tworzenia studenta: ', error);
      setIsAdded(false);
    }
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  return (
    <div>
      <h1>Nowy student</h1>
        <label>Imię:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        /><br />
        <label>Nazwisko:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleLastNameChange}
        /><br />
      <button onClick={handleCreateStudent}>Zatwierdź studenta</button>
      {isAdded && 
      <p>Student stworzony</p>}
    </div>
  );
}

export default AddStudent;
