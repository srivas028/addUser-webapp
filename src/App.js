import React, {useState} from 'react';
import Users from './components/Users/Users';
import UsersList from './components/Users/UsersList';
import './App.css';

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUser = (uName, uAge) => {
    setUsersList((prevState) => {
      return [...prevState, {name:uName, age:uAge, id: Math.random().toString()}];
    });
  }

  return (
    <div className="App">
      <Users onAddUser={addUser}/>
      <UsersList users = {usersList}/>
    </div>
  );
}

export default App;
