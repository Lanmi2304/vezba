export default function UserList({ users, onSelectUser }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <button onClick={() => onSelectUser(user.id)} className="li-btn">
            {user.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
