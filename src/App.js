// import { useEffect, useState } from "react";
import "./App.css";
import ListStudents from "./components/ListStudents";
// import GetStudents from "./components/GetStudents";
import AddMark from "./components/AddMark"

function ShowStudents() {
  document.getElementById("ShowStudents").style.display = "block";
  document.getElementById("AddStudent").style.display = "none";
  document.getElementById("ChangeStudent").style.display = "none";
  document.getElementById("AddMark").style.display = "none";
}

function ShowAddStudent() {
  document.getElementById("AddStudent").style.display = "block";
  document.getElementById("ShowStudents").style.display = "none";
  document.getElementById("ChangeStudent").style.display = "none";
  document.getElementById("AddMark").style.display = "none";
}

function ShowChangeStudent() {
  document.getElementById("ShowStudents").style.display = "none";
  document.getElementById("AddStudent").style.display = "none";
  document.getElementById("ChangeStudent").style.display = "block";
  document.getElementById("AddMark").style.display = "none";
}

function ShowAddMark() {
  document.getElementById("ShowStudents").style.display = "none";
  document.getElementById("AddStudent").style.display = "none";
  document.getElementById("ChangeStudent").style.display = "none";
  document.getElementById("AddMark").style.display = "block";
}

const AddStudent = () => {
  let first_name = document.getElementById("first_name").value;
  let last_name = document.getElementById("last_name").value;

  fetch("http://127.0.0.1:8000/students/", {
  method: "POST",
  body: JSON.stringify({
      first_name: first_name,
      last_name: last_name,
      title: "Add new student",
  }),
  headers: {
      "Content-type": "application/json; charset=UTF-8"
  }
  })
  .then((response) => response.json())
  .then((json) => console.log(json));
}

const ChangeStudent = () => {
  let first_name = document.getElementById("change_first_name").value;
  let last_name = document.getElementById("change_last_name").value;
  let student_id = document.getElementById("student_id").value;

  fetch(`http://127.0.0.1:8000/students/?student_id=${student_id}&first_name=${first_name}&last_name=${last_name}`, {
  method: "PUT",
  body: JSON.stringify({ 
      student_id: student_id,
      first_name: first_name,
      last_name: last_name,
      title: "Update student",
  }),
  headers: {
      "Content-type": "application/json; charset=UTF-8"
  }
  })
  .then((response) => response.json())
  .then((json) => console.log(json));
}

function App() {
  return(
    <div>
      <button onClick={ShowStudents}>Sprawdź listę studentów</button>
      <button onClick={ShowAddStudent}>Dodaj studenta</button>
      <button onClick={ShowChangeStudent}>Zmień studenta</button>
      <button onClick={ShowAddMark}>Dodaj ocenę</button>
      <div id="ShowStudents">
        <ListStudents />
      </div>
      <div id="AddStudent">
        <form>
          <label>Imię</label><br></br>
          <input type="text" name="first_name" id="first_name"></input><br></br>
          <label>Nazwisko</label><br></br>
          <input type="text" name="last_name" id="last_name"></input><br></br>
        </form>
        <button onClick={AddStudent}>Utwórz studenta</button>
      </div>
      <div id="ChangeStudent">
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