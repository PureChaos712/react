// import { useEffect, useState } from "react";
import "./App.css";
import ListStudents from "./components/ListStudents";
import AddStudent from "./components/AddStudent";
import ChangeStudent from "./components/ChangeStudent";


function ShowStudents() {
  document.getElementById("ShowStudentsDiv").style.display = "block";
  document.getElementById("AddStudentDiv").style.display = "none";
  document.getElementById("ChangeStudentDiv").style.display = "none";
}

function ShowAddStudent() {
  document.getElementById("ShowStudentsDiv").style.display = "none";
  document.getElementById("AddStudentDiv").style.display = "block";
  document.getElementById("ChangeStudentDiv").style.display = "none";
}

function ShowChangeStudent() {
  document.getElementById("ShowStudentsDiv").style.display = "none";
  document.getElementById("AddStudentDiv").style.display = "none";
  document.getElementById("ChangeStudentDiv").style.display = "block";
}

function App() {
  return(
    <div>
      <button onClick={ShowStudents}>Sprawdź listę studentów</button>
      <button onClick={ShowAddStudent}>Dodaj studenta</button>
      <button onClick={ShowChangeStudent}>Zmień studenta</button>
      <div id="ShowStudentsDiv">
        <ListStudents />
      </div>

      <div id="AddStudentDiv">
        <form>
          <label>Imię</label><br></br>
          <input type="text" name="first_name" id="first_name"></input><br></br>
          <label>Nazwisko</label><br></br>
          <input type="text" name="last_name" id="last_name"></input><br></br>
        </form>
        <button onClick={AddStudent}>Utwórz studenta</button>
      </div>

      <div id="ChangeStudentDiv">
      <form>
          <label>Numer ID</label><br></br>
          <input type="number" id="student_id"></input><br></br>
          <label>Imię</label><br></br>
          <input type="text" name="change_first_name" id="change_first_name"></input><br></br>
          <label>Nazwisko</label><br></br>
          <input type="text" name="change_last_name" id="change_last_name"></input><br></br>
        </form>
        <button onClick={ChangeStudent}>Zmień studenta</button>
      </div>

    </div>
  )
}

export default App;