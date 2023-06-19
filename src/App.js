import React from "react";
import "./App.css";
import AddStudent from "./components/AddStudent";
import ListStudents from "./components/ListStudents";
import { useState } from "react"
import fetchStudents from "./api/FetchStudents";
import ChangeStudent from "./components/ChangeStudent";


function App() {

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
      const data = await fetchStudents();
      setStudents(data);
      setIsShowingStudents(true);
      setIsShowingAddStudents(false)
      setIsShowingChangeStudent(false)
    } catch (error) {
      console.log("An error occurred while fetching students: ", error);
    }
  };
  
  return(
  <div>
    <button onClick={handleShowStudents}>Show students</button>
    <button onClick={handleShowAddStudents}>Dodaj studenta</button>
    <button onClick={handleShowChangeStudent}>Modyfikuj studenta</button>

    {isShowingAddStudents && (
      <AddStudent />
    )}

    {isShowingStudents && (
      <ListStudents students={students}/>
    )}

    {isShowingChangeStudent && (
      <ChangeStudent />
    )}
  </div>
  )
}

export default App;