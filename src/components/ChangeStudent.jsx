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

export default ChangeStudent