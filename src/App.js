
import React, {useState} from 'react'
import "./App.css";
import AddUser from "./components/User/AddUser";
import UsersList from './components/User/UsersList'

function App(props) {
    const [usersList, setUsersList] = useState([])
    const addUserHandler = (userName,userAge) =>{
        setUsersList(prevUsersList =>{

            return [...prevUsersList, {name:userName, age:userAge, id:Math.random().toString()}]
        })
    }

  return <div>
      <AddUser onAddUser={addUserHandler}/> 
      <UsersList users={usersList} />
        </div>
}

export default App;
