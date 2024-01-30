import UserList from "./UserList";
import useUsersData from "../hooks/useUsersData";

const UsersContainer = () => {
  const {isLoading, error, data}=useUsersData()

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
