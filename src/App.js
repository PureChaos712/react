import React from "react";
import "./App.css";
import AddStudent from "./components/AddStudent";
import ListStudents from "./components/ListStudents";
import { useState } from "react"
import fetchStudents from "./api/FetchStudents";
import ChangeStudent from "./components/ChangeStudent";


function App() {

  let BACKEND_URL = "http://127.0.0.1:8000/students/"

  const [students, setStudents] = useState({});
  const [isShowingStudents, setIsShowingStudents] = useState(false);
  const [isShowingAddStudents, setIsShowingAddStudents] = useState(false);
  const [isShowingChangeStudent, setIsShowingChangeStudent] = useState(false);


  const handleShowAddStudents = () => {
    setIsShowingAddStudents(true);
    setIsShowingStudents(false)
    setIsShowingChangeStudent(false)
  };

  const handleShowChangeStudent = () => {
    setIsShowingChangeStudent(true)
    setIsShowingAddStudents(false);
    setIsShowingStudents(false)
  };

  const handleShowStudents = async () => {
    try {
      const data = await fetchStudents(BACKEND_URL);
      setStudents(data);
      setIsShowingStudents(true);
      setIsShowingAddStudents(false)
      setIsShowingChangeStudent(false)
    } catch (error) {
      console.log("Pojawił się błąd podczas pobierania listy studentów: ", error);
    }
  };
  
  return(
  <div>
    <button onClick={handleShowStudents}>Show students</button>
    <button onClick={handleShowAddStudents}>Dodaj studenta</button>
    <button onClick={handleShowChangeStudent}>Zmień studenta</button>

    {isShowingAddStudents && (
      <AddStudent BACKEND_URL={BACKEND_URL} />
    )}

    {isShowingStudents && (
      <ListStudents students={students} />
    )}

    {isShowingChangeStudent && (
      <ChangeStudent BACKEND_URL={BACKEND_URL} />
    )}
  </div>
  )
}

export default App;