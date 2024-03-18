export default function ShowUserInfo({ user, onUserDelete }) {
  return (
    <div>
      <div className="list">
        <h2>Name:</h2>
        <p>{user.name}</p>
      </div>
      <img src={user.picture} alt="userPicture" />
      <button onClick={onUserDelete}>Delete User</button>
    </div>
  );
}
