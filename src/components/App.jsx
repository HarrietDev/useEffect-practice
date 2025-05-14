import UserList from "../components/UserList";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [randomUsers, setRandomUser] = useState(false);

  const randomId = Math.floor(Math.random() * 10) + 1;

  useEffect(() => {
    if (randomUsers) {
      fetch(`https://jsonplaceholder.typicode.com/users/${randomId}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          setUsers(data);
        });
    } else {
      fetch("https://jsonplaceholder.typicode.com/users/")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          setUsers(data);
        });
    }
  }, [randomUsers]);

  const handleRandomUser = () => {
    console.log("Random user clicked");

    setRandomUser(!randomUsers);
  };

  return (
    <>
      <UserList users={users} toggleRandomUser={handleRandomUser} />
    </>
  );
}

export default App;
