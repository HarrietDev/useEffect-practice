export default function UserCard(user) {
  console.log(JSON.stringify(user));

  return (
    <>
      <div className="user-card">
        <img
          width="100"
          height="100"
          src="https://img.icons8.com/material-rounded/100/user-male-circle.png"
          alt="user-male-circle"
        />
        <h2 className="user-name">{user.username}</h2>
        <p className="user-role">{user.name}</p>
        <p className="user-description">{user.email}</p>
      </div>
    </>
  );
}
