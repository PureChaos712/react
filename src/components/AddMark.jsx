// import { useEffect, useState } from "react";

const AddMark = () => {
    let student_id = document.getElementById("mark_student_id").value;
    let ocena = document.getElementById("ocena").value;
  
    fetch(`http://127.0.0.1:8000/students/${student_id}/marks/${ocena}`,{
    method: "POST",
    body: JSON.stringify({
        student_id: student_id,
        ocena: ocena,
        title: "Add new student",
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
  }
export default AddMark
