import React from "react";

function List() {
  //map array
  const cities = ["Etivac", "Nacalub", "Silang", "Ejip", "Beerhouse"];
  //filter
  const newCities = cities.filter((city) => city !== "Silang");

  const person = [
    {
      id: 0,
      name: "John Markengkey",
      age: "11",
    },

    {
      id: 1,
      name: "John Marky",
      age: "24",
    },

    {
      id: 2,
      name: "Markoykoy",
      age: "25",
    },
    {
      id: 3,
      name: "Idolo",
      age: "26",
    },
  ];
  //loading screen
  if (person.length === 0) return "Wala laman bai";

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {cities.map((city, index) => (
          <li className="list-group-item" key={index}>
            {city}
          </li>
        ))}
      </ul>
      <hr />
      {person.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
            </tr>
          </thead>
          <tbody>
            {person.map((datas) => {
              return (
                <tr key={datas.id}>
                  <td style={{ color: "red" }}>{datas.id}</td>
                  <td>{datas.name}</td>
                  <td>{datas.age < 20 ? "atabs" : "gorang"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default List;
