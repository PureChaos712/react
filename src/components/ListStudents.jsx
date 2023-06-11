import { useEffect, useState } from "react";

const ListStudents = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/students/")
      .then((response) => response.json())
      .then((actualData) => {
        let output = []
        for (let item in actualData) {
          output.push(actualData[item])
        }
        setData(output);
      })  
    }, []); //jak renderować po każdej zmianie

  return (
    <div>{
      data.map(({ student_id, first_name, last_name }) => (
      <p key={student_id}>Numer ID: {student_id} <br/>Imię: {first_name} <br/>Nazwisko: {last_name}</p>
    ))}
    </div>
  )

}

export default ListStudents