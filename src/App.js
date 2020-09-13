import React from "react";
import "./App.css";
import Authed from "./components/Authed";
import NotAuthed from "./components/NotAuthed";
import ListItem from "./components/ListItem";

function App() {
  // const truthy = "This is the truth";
  // const falsy = "This is false";
  const auth = true;
  const arrayForFun = [1, 2, 3, 4, 5];
  // const renderArray = () => {
  //   return arrayForFun.map((res, id) => <li key={id}>{res}</li>);
  // };

  return (
    <div className="App">
      {auth ? <Authed /> : <NotAuthed />}
      <ul>
        {arrayForFun.map((num, id) => (
          <ListItem key={id} passedNumber={num} anotherProp={num * 2} />
        ))}
      </ul>
    </div>
  );
}

export default App;
