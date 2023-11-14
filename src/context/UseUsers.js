import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();
const UserProvider = ({ children }) => {
  const UserAPI = "https://dummyjson.com/users";
  const [Users, setUsers] = useState([]);
  const getUsers = async () => {
    let users = await fetch(UserAPI, { method: "GET" });
    users = await users.json();
    setUsers(users.users);
    // console.log(users)
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UserContext.Provider value={{ Users }}>{children}</UserContext.Provider>
  );
};
const useUsers = () => useContext(UserContext);
export { useUsers, UserProvider };
