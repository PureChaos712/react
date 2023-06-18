import BACKEND_URL from App.js

fetch(`${BACKEND_URL}/students/`, {
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