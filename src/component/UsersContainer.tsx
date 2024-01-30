import { useEffect, useState } from "react";
import UserList from "./UserList";

const UsersContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  const getUsers = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(url);
      const data = await res.json();
      setIsLoading(false)
      setData(data);
      console.log("data", data);
    } catch (err) {
     setError(true)
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold">
        Container and Presentational Pattern
      </h1>

    <UserList data={data} error={error} isLoading={isLoading}/>
    </div>
  );
};

export default UsersContainer;
