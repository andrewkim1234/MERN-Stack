import "./App.css";
import {useState, useEffect} from "react"; 
import Axios from "axios";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [Name, setName] = useState("");
  const [Exercise, setExercise] = useState("");
  const [Weight, setWeight] = useState(0);
  const [Reps, setReps] = useState(0);

  useEffect (() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data)
    });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      Name,
      Exercise,
      Weight,
      Reps,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers,
        {
          Name,
          Exercise, 
          Weight,
          Reps,
        },
      ]);
    });
  };

  return (
  <div className="App">
    <div className="usersDisplay">
      {listOfUsers.map((user) => {
        return (
        <div> 
          <h1>Name: {user.Name}</h1>
          <h1>Exercise: {user.Exercise}</h1>
          <h1>Weight: {user.Weight}</h1>
          <h1>Reps: {user.Reps}</h1>
        </div>
        )
      })}Track Weight Lifting Progress
    </div>

    <div>
      <input 
      type="text"
      placeholder="Name..." 
      onChange = {(event) => {
        setName(event.target.value);
        }}
        />
      <input 
      type="text" 
      placeholder="Exercise..."
      onChange = {(event) => {
        setExercise(event.target.value);
        }}
        />
      <input 
      type="number" 
      placeholder="Weight (lbs)..."
      onChange = {(event) => {
        setWeight(event.target.value);
        }}
        />
      <input 
      type="number" 
      placeholder="Reps..."
      onChange = {(event) => {
        setReps(event.target.value);
        }}
        />
      <button onClick = {createUser}> Enter </button>
    </div>
  </div>
  )
}

export default App;
