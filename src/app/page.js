"use client";
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from "react";

export default function Home() {
  const[users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async() => {
    setLoading(true);
    try{
      const response = await fetch('/api/getUsers');
      const data = await response.json();
      setUsers(data);
      console.log(users);
    } catch(error){
      console.error("Error fetching users: " + error);
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className="container text-center">
      <div className="row">
        <div className="col"></div>
        <div className="col-6">

          <h1>Users: </h1>
          <button type="button" className="btn btn-primary" onClick={getUsers}>Load Users</button>
          {loading && <><p>Loading...</p><ul id="showUsers" hidden></ul></>}
          <ul id="showUsers">
            {users.map((user) => (
              <li key={user.user_id}>{user.username}</li>
            ))}
          </ul>

        </div>
        <div className="col"></div>
      </div>
      
    </div>
  );
}
