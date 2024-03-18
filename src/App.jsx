import { useState } from "react";
import SignUp from "./SignUp";
import UserList from "./UserList";
import ShowUserInfo from "./ShowUserInfo";

function App() {
  const [users, setUsers] = useState({
    selectedUserId: undefined,
    users: [],
  });

  function handleSelectUser(id) {
    setUsers((prevState) => {
      console.log(prevState.selectedUserId);
      return {
        ...prevState,
        selectedUserId: id,
      };
    });
  }
  function handleCreateUser(data) {
    const newUser = { ...data, id: Math.random() };
    setUsers((prevState) => {
      return {
        ...prevState,
        users: [newUser, ...prevState.users],
      };
    });

    console.log(newUser);
  }

  function handleDeleteUser() {
    setUsers((prevState) => {
      return {
        ...prevState,
        selectedUserId: undefined,
        users: prevState.users.filter(
          (user) => user.id !== prevState.selectedUserId
        ),
      };
    });
  }

  const currentUser = users.users.find(
    (user) => user.id === users.selectedUserId
  );

  return (
    <>
      <div className="container">
        <SignUp onCreateUser={handleCreateUser} />
        <UserList users={users.users} onSelectUser={handleSelectUser} />
      </div>

      {currentUser && (
        <ShowUserInfo user={currentUser} onUserDelete={handleDeleteUser} />
      )}
    </>
  );
}

export default App;
