//import React from "react";
import { Link } from "react-router-dom";

interface User {
  id: number;
  name: string;
  email: string;
  number: string;
}

interface UserListProps {
  users: User[];
  name: string;
}

const UserList: React.FC<UserListProps> = ({ users, name }) => {
  const deleteUser = (id: number) => {
    fetch(`http://localhost:8000/users/${id}`, { method: "DELETE" });
  };

  return (
    <>
      <section>
        <section>
          <h1>{name}</h1>
        </section>
        <section>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Details</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <p>{user.name}</p>
                  </td>

                  <td>
                    <p>{user.email}</p>
                  </td>

                  <td>
                    <Link to={`/users/${user.id}`}>
                      <button>View full details</button>
                    </Link>
                  </td>

                  <td>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>
    </>
  );
};

export default UserList;
