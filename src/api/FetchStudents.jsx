const fetchStudents = async (BACKEND_URL) => {
    return fetch(`${BACKEND_URL}`)
      .then(response => {
        console.log(response.status);
        return response.json();
      })
      .catch(error => {
        console.log("Pojawił się błąd: ", error);
      });
  };
  
  export default fetchStudents;