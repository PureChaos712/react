const createStudent = async (BACKEND_URL, firstName, lastName) => {
    try {
      if (firstName && lastName) {
        await fetch(`${BACKEND_URL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            first_name: firstName,
            last_name: lastName
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
  