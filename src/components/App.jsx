import UserList from "../components/UserList"
import {useState, useEffect} from "react";


function App() {
    const [users, setUsers] = useState([]);
    const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users")

    useEffect(() => {
      console.log(`Fetch URL: ${url}`)
      fetch(url)
      .then(response => response.json())
      .then(data => {
        Array.isArray(data) ? setUsers(data) : setUsers([data])
      })
    }, [url])

    function handleRandomUser(){
      let randomNumber = Math.floor(Math.random() * 10) + 1
      console.log(`Random number is: ${randomNumber}`)
      setUrl(`https://jsonplaceholder.typicode.com/users/${randomNumber}`)
      console.log(`New URL : ${url}`)
    }

    function getAllUsers(){
      setUrl("https://jsonplaceholder.typicode.com/users")
    }

    return (
        <>
          <UserList users={users} fetchRandomUser={handleRandomUser} fetchAllUsers={getAllUsers}/>
        </>
    )
}

export default App
