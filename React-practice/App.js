import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const name = [
    "Murshedul",
    "Abid",
    "Jarif",
    "Apon",
    "Fahim",
    "Munta",
    "Sanjed",
    "Farhan",
    "Abir",
    "Ashfak",
  ];
  const school = "Dinajpur Zilla School";

  return (
    
    <div className="App">
      <Users></Users>
    </div>
  );
}
function Users() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setusers(data));
  });
  return (
    
    <div>
      <h1>External users</h1>
      {users.map((user) => (<li>{user.name}</li>))}
    </div>
  );
}

export default App;

/*
 <Freinds name={name[0]} school={school}></Freinds>
      <Freinds name={name[1]} school={school}></Freinds>
      <Freinds name={name[2]} school={school}></Freinds>
      <Freinds name={name[3]} school={school}></Freinds>
      <Freinds name={name[4]} school={school}></Freinds>
      <Freinds name={name[5]} school={school}></Freinds>
      <Freinds name={name[6]} school={school}></Freinds>
      <Freinds name={name[7]} school={school}></Freinds>
      <Freinds name={name[8]} school={school}></Freinds>
      <Freinds name={name[9]} school={school}></Freinds>



      function Freinds(props) {
  console.log(props)
  const containerStyle = {
    backgroundColor: 'lightgreen',
    fontSize: '15px',
    fontFamily: "'Josefin Sans', sans-serif",
    margin: '20px',
    border: "1px solid gray",
    borderRadius: '10px'

  }
  return (
    <div style={containerStyle} >
      <h2>{props.name}</h2>
      <h4>About: He is my freind</h4>
      <p>School: {props.school}</p>
    </div>
  )

}

*/
