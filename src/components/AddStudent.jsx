// import { useEffect, useState } from "react";

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

export default AddStudent