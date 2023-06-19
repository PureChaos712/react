import React from 'react';

function ListStudents({ students }) {

  return (
    <div>
      {
        <ol>
          {/* Object.entries -> takie śmieszne coś, co zmienia elementy z danej struktury danych (w tym przypadku elementy słownika) na tablicę 
          [[1,{first_name:'Weronika', last_name: 'Bulanda'}],[2, {first_name: 'Maja', last_name: 'Bulanda'}]] */}

          {/* map -> iterowanie po tablicy -> funkcja wykona się na każdym elemencie tablicy */}
          
          {Object.entries(students).map(([studentId, student]) => (
            <li key={studentId}>
              {student.first_name} {student.last_name}
            </li>
          ))}
        </ol>
      }
    </div>
  );
}

export default ListStudents;
