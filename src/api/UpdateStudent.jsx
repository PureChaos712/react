const updateStudent = async (studentId, firstName, lastName) => {
    try {
      if (studentId && firstName && lastName) {
        fetch(`http://127.0.0.1:8000/students/?student_id=${studentId}&first_name=${firstName}&last_name=${lastName}`, {
            method: "PUT",
            body: JSON.stringify({ 
                student_id: studentId,
                first_name: firstName,
                last_name: lastName,
                title: "Update student",
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  
  
  export default updateStudent;
  