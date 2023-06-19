const fetchStudents = async () => {
    return fetch("http://127.0.0.1:8000/students/")
      .then(response => {
        console.log(response.status);
        return response.json();
      })
      .catch(error => {
        console.log("An error occurred: ", error);
      });
  };
  
  export default fetchStudents;