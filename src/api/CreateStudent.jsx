const createStudent = async (studentName, studentSurname) => {
    try {
      if (studentName && studentSurname) {
        await fetch('http://localhost:8000/students/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            first_name: studentName,
            last_name: studentSurname
          })
        });
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  
  export default createStudent;
  