const updateStudent = async (BACKEND_URL, studentId, firstName, lastName) => {
    try {
      if (studentId && firstName && lastName) {
        fetch(`${BACKEND_URL}?student_id=${studentId}&first_name=${firstName}&last_name=${lastName}`, {
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
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
 
  
  export default updateStudent;