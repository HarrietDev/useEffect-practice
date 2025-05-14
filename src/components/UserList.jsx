import UserCard from "./UserCard";
import Search from "./Search";

export default function UserList({ users, toggleRandomUser }) {
  return (
    <>
      <Search toggleRandomUser={toggleRandomUser} />
      <div className="user-list">
        {Array.isArray(users) ? (
          users.map((user) => UserCard(user))
        ) : (
          <UserCard {...users} />
        )}
      </div>
    </>
  );
}
