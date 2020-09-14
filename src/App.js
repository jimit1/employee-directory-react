import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import EmployeeCard from "./components/EmployeeCard";
import axios from "axios";
import Container from "./components/Container";
import SortBar from "./components/SortBar";

function App() {
  const [list, setList] = useState([]);
  const [modList, setModList] = useState([]);

  const getData = () => {
    return new Promise((resolve, reject) => {
      axios
        .get("https://randomuser.me/api/?results=10&nat=us")
        .then(({ data }) => {
          console.log(data);
          resolve(data.results);
        })
        .catch((error) => reject(error));
    });
  };

  useEffect(() => {
    getData()
      .then((res) => {
        setList(res);
        setModList(res);
      })
      .catch((error) => console.log(error));
  }, []);

  const sort = (e) => {
    switch (e.target.value) {
      case "az":
        const sortAZ = [...list].sort(function (a, b) {
          if (a.name.first < b.name.first) {
            return -1;
          }
          if (a.name.first > b.name.first) {
            return 1;
          }
          return 0;
        });
        console.log("sorted:", sortAZ);
        setModList([...sortAZ]);
        break;

      case "za":
        const sortZA = [...list].sort(function (b, a) {
          if (a.name.first < b.name.first) {
            return -1;
          }
          if (a.name.first > b.name.first) {
            return 1;
          }
          return 0;
        });
        console.log("sorted:", sortZA);
        setModList([...sortZA]);
        break;

      case "none":
        setModList([...list]);
        break;

      default:
        break;
    }
  };

  const filter = (e) => {
    if (e.target.value !== "both") {
      const filtered = list.filter(
        (element) => element.gender === e.target.value
      );
      setModList([...filtered]);
    } else {
      setModList([...list]);
    }
  };

  return (
    <div className="App">
      <NavBar />
      <Container>
        <SortBar sort={sort} filter={filter} />
        <EmployeeCard list={modList} />
      </Container>
    </div>
  );
}

export default App;
